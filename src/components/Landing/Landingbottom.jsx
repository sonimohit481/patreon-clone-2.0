import React from "react";
import { Landingbottomcard } from "./Landingbottomcard";
export const Landingbottom = () => {
    const arr = [
        ["https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/is-patreon-right-for-you_2x.jpg", "Is Patreon Right For You And Your Business?", "In this article, we want to introduce you to the membership model—an effective, field-tested way for independent creators..."],
        ["https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/6-membership-based-business_2x.jpg", "6 Membership-based Business Models You Can Use On Patreon Today", "If you’ve looked at what other creators are doing on Patreon, it can be daunting to see how many different ways they leverage..."],
        ["https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/20-most-useful_2x.jpg", "The 20 Most Useful Patreon Features & Integrations", "As a creator, it's easy to feel like there just aren't enough hours in the day. Whether you're working on your project part time..."]
    ]
    return (
        <div style={{ width: "70%", margin: "auto", marginBottom:"5%", marginTop:"8%"}}>
            <div style={{ width: "100%", margin: "auto", textAlign: "center", marginTop: "5%", marginBottom:"5%" }}>
                <h1 style={{ fontSize: "40px", fontWeight: "700", color: "black" }}>See How Other Creators use Patreon</h1>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "auto auto auto", gap: "61px" }}>
                {arr.map((ele)=> <Landingbottomcard key = {ele} props = {ele}/>)}
            </div>
        </div>
    )
}