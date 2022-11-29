import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Navber from '../Pages/Share/Navber/Navber';
import useBuyer from '../Pages/useBuyer/useBuyer';
import useAdmin from '../useAdmin/useAdmin';
import useSeller from '../useSeller/useSeller';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email)

    return (
        <div>
            <Navber></Navber>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">

                        {isBuyer &&
                            <>
                                <li><Link to='/dashboard'>My Orders</Link></li>
                            </>
                        }


                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allusers'>All Users</Link></li>
                                <li><Link to='/dashboard/allseller'>All Seller</Link></li>
                                {/* <li><Link to='/dashboard/addproduct'>Add Products</Link></li> */}
                            </>
                        }
                        {
                            isSeller && <>
                                <li><Link to='/dashboard/addproduct'>Add Products</Link></li>
                                <li><Link to='/dashboard/myproduct'>My Products</Link></li>
                            </>
                        }
                        {/* <li><Link to='/dashboard/addproduct'>Add Products</Link></li>
                        <li><Link to='/dashboard/myproduct'>My Products</Link></li> */}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;