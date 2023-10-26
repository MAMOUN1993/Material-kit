import { Outlet, Link } from "react-router-dom";
const Navone = () => {
    return ( 
        <div className="nav-list">
                    <div className="nav-item">
                        <div className="para-icone">
                            <i className="fa-solid fa-pager"></i>
                            <p>pages</p>
                        </div>
                        <i className="fa-solid fa-angle-down"></i>
                        <div className="hide-list">
                            <dt>landing pages</dt>
                            <Link to="/about"><dd>about us</dd></Link>
                            <Link to="/contact"><dd>contact us</dd></Link>
                            <Link to="/arthur"><dd>arthur</dd></Link>
                            <dt>account</dt>
                            <Link to="/sign"><dd>sign in</dd></Link>
                        </div>
                    </div>
                    <div className="nav-item">
                        <div className="para-icone">
                            <i className="fa-solid fa-section"></i>
                            <p>section</p>
                        </div>
                        <i className="fa-solid fa-angle-down"></i>
                        <div className="hide-list">
                            <div className="hiden">
                                <div>
                                    <p>page sections</p>
                                    <p>see all sections</p>
                                </div>
                                <i className="fa-solid fa-caret-right"></i>
                                <div className="sec-list">
                                    <li>page header</li>
                                    <li>features</li>
                                </div>
                            </div>
                            <div className="hiden"> 
                                <div>
                                    <p>navigation</p>
                                    <p>see all navigations</p>
                                </div>
                                <i className="fa-solid fa-caret-right"></i>
                                <div className="sec-list">
                                    <li>navbar</li>
                                    <li>nav tabs</li>
                                    <li>Pagination</li>
                                </div>
                            </div>
                            <div className="hiden">
                                <div>
                                    <p>inputs areas</p>
                                    <p>see all input areas</p>
                                </div>
                                <i className="fa-solid fa-caret-right"></i>
                                <div className="sec-list">
                                    <li>inputs</li>
                                    <li>forms</li>
                                </div>
                            </div>
                            <div className="hiden">
                                <div>
                                    <p>attention cachers</p>
                                    <p>see all examples</p>
                                </div>
                                <i className="fa-solid fa-caret-right"></i>
                                <div className="sec-list">
                                    <li>alerts</li>
                                    <li>modals</li>
                                    <li>tooltips & popovers</li>
                                </div>
                            </div>
                            <div className="hiden">
                                <div>
                                    <p>elements</p>
                                    <p>see all 32 elements</p>
                                </div>
                                <i className="fa-solid fa-caret-right"></i>
                                <div className="sec-list">
                                    <li>avatars</li>
                                    <li>badges</li>
                                    <li>breadscrumbs</li>
                                    <li>bottuns</li>
                                    <li>dropdowns</li>
                                    <li>brogres bars</li>
                                    <li>toggles</li>
                                    <li>typography</li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nav-item">
                        <div className="para-icone">
                            <i className="fa-solid fa-file"></i>
                            <p>docs</p>
                        </div>
                        <i className="fa-solid fa-angle-down"></i>
                        <div className="hide-list docs">
                            <div className="docs-list">
                                <p>geting started</p>
                                <p>all about over view,qick start,license</p>
                            </div>
                            <div className="docs-list">
                                <p>foundation</p>
                                <p>see our colors,icons and typography</p>
                            </div>
                            <div className="docs-list">
                                <p>components</p>
                                <p>explore our collection of fully designed components</p>
                            </div>
                            <div className="docs-list">
                                <p>plugins</p>
                                <p>chek how you can integreate our plugins</p>
                            </div>
                        </div>
                    </div>
                    <div className="nav-item">
                        <i className="fa-brands fa-github"></i>
                        <p>github</p>
                    </div>
                    <Outlet/>
                </div>
    );
}

export default Navone;