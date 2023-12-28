import React from "react";
import { useState } from "react";
export const Landingmid = () => {

    const [count, setCount] = useState(0);
    const arr = [
        "https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/podcasters.png",

        "https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/videocreators.png",

        "https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/musicians.png",

        "https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/visualartists.png",

        "https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/writers.png",

        "https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/gamingcreators.png",

        "https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/nonprofit.png",

        "https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/tutorials.png",

        "https://live-patreon-marketing.pantheonsite.io/wp-content/uploads/2020/12/creatorsofallkinds.png"
    ];
    const arr1 = [
        "Podcasters",
        "Video Creators",
        "Musicians",
        "Visual Artists",
        "Writers And Journalists",
        "Gaming Creators",
        "Non-Profits",
        "Tutorials",
        "Creators Of All Kinds"
    ];
    React.useEffect(() => {
        console.log("rendering");
        const id = setInterval(() => {
            setCount((prev) => {
                if (prev === arr.length - 1) {
                    // console.log(arr[prev*0]);
                    // clearInterval(id);
                    return 0;
                }
                //   console.log(arr[prev]);
                return prev + 1;
            });
        }, 2000);
        return () => {
            clearInterval(id);
            console.log("leaving");
        };
    }, []);

    return (
        <div>
            <div style={{ width: "52%", margin: "auto", textAlign: "center", marginTop: "5%" }}>
                <h1 style={{ fontSize: "42px", fontWeight: "700", color: "black" }}>Who uses Patreon?</h1>
                <div style={{ fontSize: "20px", marginTop: "5%" }}>If you’re ready to take your work to the next level and willing to open your heart to your audience, Patreon is for you.</div>
            </div>

            <div style={{ width: "70%", display: "flex", margin: "auto", marginTop: "3%" }}>
                <div style={{ width: "50%", padding: "1.5%", display: "flex", alignItems: "center" }}>
                    <img src={arr[count]} alt="" />
                </div>
                <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
                    {
                        arr1.map((ele) => {
                            return (
                                <h1 key={ele} style={arr1[count] === ele ?
                                    { fontSize: "26px", fontWeight: "700", color: "black", textDecoration: "underline", padding: "2%", width: "70%", margin: "auto" }
                                    :{ fontSize: "26px", fontWeight: "700", color: "grey", padding: "2%", width: "70%", margin: "auto" }}   >

                                    {ele}

                                </h1>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}


