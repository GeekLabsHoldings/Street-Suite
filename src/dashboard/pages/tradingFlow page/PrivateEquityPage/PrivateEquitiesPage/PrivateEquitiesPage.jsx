import React from 'react'
import styles from './PrivateEquitiesPage.module.css'
import companyLogo from '../../../../assets/companyImg.png'
import { Link } from 'react-router-dom'
import $ from 'jquery';
import CustomSelectMenu from '../../../../UI-components/CustomSelectMenu/CustomSelectMenu';


const PrivateEquitiesPage = () => {

    const IndustryOptions = [
        { name: "Industry" },
        { name: "Finance" },
        { name: "Finance" },
        { name: "Finance" },
        { name: "Finance" },
        { name: "Finance" },
    ]

    const RoundOptions = [
        { name: "Round" },
        { name: "Angel" },
        { name: "Angel" },
        { name: "Angel" },
        { name: "Angel" },
        { name: "Angel" },
    ]

    // function that open & close collaps 
    const openCollaps = (e) => {
        // slide up all collaps are open
        $(".collapse_body").not($(e.target).parents(".collapse_header").siblings(".collapse_body")).slideUp(300);
        $(".collapse_header").not($(e.target).parents(".collapse_header")).removeClass("open")

        // toggle slide collaps by click
        $(e.target).parents(".collapse_header").siblings(".collapse_body").slideToggle(300);
        $(e.target).parents(".collapse_header").addClass("open");
    }



    return (


        // table of private equities
        <div className={styles.private_equities_table + " private_equities_table w-full"}>

            {/* head of table  */}
            <ul className={styles.table_head + " grid grid-cols-5"}>
                <li>Name</li>

                {/* custom select menu component */}
                <li><CustomSelectMenu options={IndustryOptions} /> </li>
                <li>Equity Value</li>
                <li><CustomSelectMenu options={RoundOptions} /></li>
                <li>Price</li>
            </ul>

            {/* body of table */}
            <div className={styles.table_body + " flex flex-col gap-[15px]"}>

                {/* row of equity data */}
                <div className={styles.collapse + " equity_collapse"}>
                    {/* collapse head that open collapse body by clicked on */}
                    <ul className="collapse_header grid grid-cols-5 gap-[1px] cursor-pointer" onClick={(e) => openCollaps(e)}>
                        <li><img src={companyLogo} alt="" /></li>
                        <li>Finance</li>
                        <li>$200 K</li>
                        <li>Angel</li>
                        <li className='flex gap-[5px] lg:gap-[16px]'>$ 190 <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.502575 7.72727H9.54374C9.63528 7.72698 9.725 7.70104 9.80326 7.65225C9.88152 7.60346 9.94534 7.53366 9.98786 7.45037C10.0304 7.36708 10.05 7.27346 10.0446 7.17957C10.0392 7.08569 10.0089 6.9951 9.95712 6.91756L5.43654 0.208622C5.24919 -0.0695407 4.79813 -0.0695407 4.61028 0.208622L0.0896953 6.91756C0.0373694 6.99494 0.00668438 7.08557 0.000973897 7.17961C-0.00473659 7.27366 0.014746 7.36751 0.0573048 7.45097C0.0998636 7.53443 0.163871 7.60432 0.242372 7.65303C0.320874 7.70174 0.410868 7.72742 0.502575 7.72727Z" fill="#118F4B" />
                        </svg>
                        </li>
                    </ul>

                    {/* collapse body that has equity description */}
                    <div className={styles.collapse_body + " collapse_body"}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

                        {/* learn more link that navigate to single equity */}
                        <Link to="single-equity">Learn more</Link>
                    </div>
                </div>

                {/* row of equity data */}
                <div className={styles.collapse + " equity_collapse"}>
                    {/* collapse head that open collapse body by clicked on */}
                    <ul className="collapse_header grid grid-cols-5 gap-[1px] cursor-pointer" onClick={(e) => openCollaps(e)}>
                        <li><img src={companyLogo} alt="" /></li>
                        <li>Finance</li>
                        <li>$200 K</li>
                        <li>Angel</li>
                        <li className='flex gap-[5px] lg:gap-[16px]'>$ 190 <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.502575 7.72727H9.54374C9.63528 7.72698 9.725 7.70104 9.80326 7.65225C9.88152 7.60346 9.94534 7.53366 9.98786 7.45037C10.0304 7.36708 10.05 7.27346 10.0446 7.17957C10.0392 7.08569 10.0089 6.9951 9.95712 6.91756L5.43654 0.208622C5.24919 -0.0695407 4.79813 -0.0695407 4.61028 0.208622L0.0896953 6.91756C0.0373694 6.99494 0.00668438 7.08557 0.000973897 7.17961C-0.00473659 7.27366 0.014746 7.36751 0.0573048 7.45097C0.0998636 7.53443 0.163871 7.60432 0.242372 7.65303C0.320874 7.70174 0.410868 7.72742 0.502575 7.72727Z" fill="#118F4B" />
                        </svg>
                        </li>
                    </ul>

                    {/* collapse body that has equity description */}
                    <div className={styles.collapse_body + " collapse_body"}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

                        {/* learn more link that navigate to single equity */}
                        <Link to="single-equity">Learn more</Link>
                    </div>
                </div>

                {/* row of equity data */}
                <div className={styles.collapse + " equity_collapse"}>
                    {/* collapse head that open collapse body by clicked on */}
                    <ul className="collapse_header grid grid-cols-5 gap-[1px] cursor-pointer" onClick={(e) => openCollaps(e)}>
                        <li><img src={companyLogo} alt="" /></li>
                        <li>Finance</li>
                        <li>$200 K</li>
                        <li>Angel</li>
                        <li className='flex gap-[5px] lg:gap-[16px]'>$ 190 <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.502575 7.72727H9.54374C9.63528 7.72698 9.725 7.70104 9.80326 7.65225C9.88152 7.60346 9.94534 7.53366 9.98786 7.45037C10.0304 7.36708 10.05 7.27346 10.0446 7.17957C10.0392 7.08569 10.0089 6.9951 9.95712 6.91756L5.43654 0.208622C5.24919 -0.0695407 4.79813 -0.0695407 4.61028 0.208622L0.0896953 6.91756C0.0373694 6.99494 0.00668438 7.08557 0.000973897 7.17961C-0.00473659 7.27366 0.014746 7.36751 0.0573048 7.45097C0.0998636 7.53443 0.163871 7.60432 0.242372 7.65303C0.320874 7.70174 0.410868 7.72742 0.502575 7.72727Z" fill="#118F4B" />
                        </svg>
                        </li>
                    </ul>

                    {/* collapse body that has equity description */}
                    <div className={styles.collapse_body + " collapse_body"}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

                        {/* learn more link that navigate to single equity */}
                        <Link to="single-equity">Learn more</Link>
                    </div>
                </div>

                {/* row of equity data */}
                <div className={styles.collapse + " equity_collapse"}>
                    {/* collapse head that open collapse body by clicked on */}
                    <ul className="collapse_header grid grid-cols-5 gap-[1px] cursor-pointer" onClick={(e) => openCollaps(e)}>
                        <li><img src={companyLogo} alt="" /></li>
                        <li>Finance</li>
                        <li>$200 K</li>
                        <li>Angel</li>
                        <li className='flex gap-[5px] lg:gap-[16px]'>$ 190 <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.502575 7.72727H9.54374C9.63528 7.72698 9.725 7.70104 9.80326 7.65225C9.88152 7.60346 9.94534 7.53366 9.98786 7.45037C10.0304 7.36708 10.05 7.27346 10.0446 7.17957C10.0392 7.08569 10.0089 6.9951 9.95712 6.91756L5.43654 0.208622C5.24919 -0.0695407 4.79813 -0.0695407 4.61028 0.208622L0.0896953 6.91756C0.0373694 6.99494 0.00668438 7.08557 0.000973897 7.17961C-0.00473659 7.27366 0.014746 7.36751 0.0573048 7.45097C0.0998636 7.53443 0.163871 7.60432 0.242372 7.65303C0.320874 7.70174 0.410868 7.72742 0.502575 7.72727Z" fill="#118F4B" />
                        </svg>
                        </li>
                    </ul>

                    {/* collapse body that has equity description */}
                    <div className={styles.collapse_body + " collapse_body"}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

                        {/* learn more link that navigate to single equity */}
                        <Link to="single-equity">Learn more</Link>
                    </div>
                </div>

                {/* row of equity data */}
                <div className={styles.collapse + " equity_collapse"}>
                    {/* collapse head that open collapse body by clicked on */}
                    <ul className="collapse_header grid grid-cols-5 gap-[1px] cursor-pointer" onClick={(e) => openCollaps(e)}>
                        <li><img src={companyLogo} alt="" /></li>
                        <li>Finance</li>
                        <li>$200 K</li>
                        <li>Angel</li>
                        <li className='flex gap-[5px] lg:gap-[16px]'>$ 190 <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.502575 7.72727H9.54374C9.63528 7.72698 9.725 7.70104 9.80326 7.65225C9.88152 7.60346 9.94534 7.53366 9.98786 7.45037C10.0304 7.36708 10.05 7.27346 10.0446 7.17957C10.0392 7.08569 10.0089 6.9951 9.95712 6.91756L5.43654 0.208622C5.24919 -0.0695407 4.79813 -0.0695407 4.61028 0.208622L0.0896953 6.91756C0.0373694 6.99494 0.00668438 7.08557 0.000973897 7.17961C-0.00473659 7.27366 0.014746 7.36751 0.0573048 7.45097C0.0998636 7.53443 0.163871 7.60432 0.242372 7.65303C0.320874 7.70174 0.410868 7.72742 0.502575 7.72727Z" fill="#118F4B" />
                        </svg>
                        </li>
                    </ul>

                    {/* collapse body that has equity description */}
                    <div className={styles.collapse_body + " collapse_body"}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

                        {/* learn more link that navigate to single equity */}
                        <Link to="single-equity">Learn more</Link>
                    </div>
                </div>

                {/* row of equity data */}
                <div className={styles.collapse + " equity_collapse"}>
                    {/* collapse head that open collapse body by clicked on */}
                    <ul className="collapse_header grid grid-cols-5 gap-[1px] cursor-pointer" onClick={(e) => openCollaps(e)}>
                        <li><img src={companyLogo} alt="" /></li>
                        <li>Finance</li>
                        <li>$200 K</li>
                        <li>Angel</li>
                        <li className='flex gap-[5px] lg:gap-[16px]'>$ 190 <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.502575 7.72727H9.54374C9.63528 7.72698 9.725 7.70104 9.80326 7.65225C9.88152 7.60346 9.94534 7.53366 9.98786 7.45037C10.0304 7.36708 10.05 7.27346 10.0446 7.17957C10.0392 7.08569 10.0089 6.9951 9.95712 6.91756L5.43654 0.208622C5.24919 -0.0695407 4.79813 -0.0695407 4.61028 0.208622L0.0896953 6.91756C0.0373694 6.99494 0.00668438 7.08557 0.000973897 7.17961C-0.00473659 7.27366 0.014746 7.36751 0.0573048 7.45097C0.0998636 7.53443 0.163871 7.60432 0.242372 7.65303C0.320874 7.70174 0.410868 7.72742 0.502575 7.72727Z" fill="#118F4B" />
                        </svg>
                        </li>
                    </ul>

                    {/* collapse body that has equity description */}
                    <div className={styles.collapse_body + " collapse_body"}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

                        {/* learn more link that navigate to single equity */}
                        <Link to="single-equity">Learn more</Link>
                    </div>
                </div>

                {/* row of equity data */}
                <div className={styles.collapse + " equity_collapse"}>
                    {/* collapse head that open collapse body by clicked on */}
                    <ul className="collapse_header grid grid-cols-5 gap-[1px] cursor-pointer" onClick={(e) => openCollaps(e)}>
                        <li><img src={companyLogo} alt="" /></li>
                        <li>Finance</li>
                        <li>$200 K</li>
                        <li>Angel</li>
                        <li className='flex gap-[5px] lg:gap-[16px]'>$ 190 <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.502575 7.72727H9.54374C9.63528 7.72698 9.725 7.70104 9.80326 7.65225C9.88152 7.60346 9.94534 7.53366 9.98786 7.45037C10.0304 7.36708 10.05 7.27346 10.0446 7.17957C10.0392 7.08569 10.0089 6.9951 9.95712 6.91756L5.43654 0.208622C5.24919 -0.0695407 4.79813 -0.0695407 4.61028 0.208622L0.0896953 6.91756C0.0373694 6.99494 0.00668438 7.08557 0.000973897 7.17961C-0.00473659 7.27366 0.014746 7.36751 0.0573048 7.45097C0.0998636 7.53443 0.163871 7.60432 0.242372 7.65303C0.320874 7.70174 0.410868 7.72742 0.502575 7.72727Z" fill="#118F4B" />
                        </svg>
                        </li>
                    </ul>

                    {/* collapse body that has equity description */}
                    <div className={styles.collapse_body + " collapse_body"}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

                        {/* learn more link that navigate to single equity */}
                        <Link to="single-equity">Learn more</Link>
                    </div>
                </div>

                {/* row of equity data */}
                <div className={styles.collapse + " equity_collapse"}>
                    {/* collapse head that open collapse body by clicked on */}
                    <ul className="collapse_header grid grid-cols-5 gap-[1px] cursor-pointer" onClick={(e) => openCollaps(e)}>
                        <li><img src={companyLogo} alt="" /></li>
                        <li>Finance</li>
                        <li>$200 K</li>
                        <li>Angel</li>
                        <li className='flex gap-[5px] lg:gap-[16px]'>$ 190 <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.502575 7.72727H9.54374C9.63528 7.72698 9.725 7.70104 9.80326 7.65225C9.88152 7.60346 9.94534 7.53366 9.98786 7.45037C10.0304 7.36708 10.05 7.27346 10.0446 7.17957C10.0392 7.08569 10.0089 6.9951 9.95712 6.91756L5.43654 0.208622C5.24919 -0.0695407 4.79813 -0.0695407 4.61028 0.208622L0.0896953 6.91756C0.0373694 6.99494 0.00668438 7.08557 0.000973897 7.17961C-0.00473659 7.27366 0.014746 7.36751 0.0573048 7.45097C0.0998636 7.53443 0.163871 7.60432 0.242372 7.65303C0.320874 7.70174 0.410868 7.72742 0.502575 7.72727Z" fill="#118F4B" />
                        </svg>
                        </li>
                    </ul>

                    {/* collapse body that has equity description */}
                    <div className={styles.collapse_body + " collapse_body"}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

                        {/* learn more link that navigate to single equity */}
                        <Link to="single-equity">Learn more</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PrivateEquitiesPage
