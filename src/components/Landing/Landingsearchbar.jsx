import React, { useState } from "react";
import { Input } from '@chakra-ui/react';
import { Stack, InputGroup, InputLeftElement, Button } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'
export const Landingsearchbar = () => {
    const [inp, setInp] = useState("");
    const [users, setUsers] = useState([])
    const getData = () => {
        if (inp !== "") {
            fetch(`https://patreon-data.herokuapp.com/users?q=${inp}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    let temp = []
                    data.forEach(function (ele) {
                        // if (((ele.creator_mode.creatormode_name).includes(inp))) {
                        //     temp.push(ele)
                        //     // console.log ("hello");
                        // }
                        temp.push(ele)
                    })
                    setUsers(temp);
                })
                .catch(err => console.log(err))
        }
    }
    React.useEffect(() => {
        getData();
    }, [inp])
    return (
        <div style={{ marginTop: "3%" }}>
            <div style={{ width: "70%", margin: "auto", textAlign: "center" }}>
                <h1 style={{ fontSize: "42px", fontWeight: "700", color: "black" }}>Search the 200,000+ creators on Patreon</h1>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: "4%", marginBottom: "8%" }}>
                    <Stack spacing={4} style={{ width: "75%", padding: "2%" }}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<SearchIcon color='gray.300' />}
                            />
                            <Input type='tel' placeholder='Search For Patreons' style={{ borderRadius: "25px", backgroundColor: "rgb(245, 244, 242)" }} focusBorderColor='none' value={inp} onChange={(e) => { setInp(e.target.value); }} />
                        </InputGroup>
                    </Stack>
                    {inp.length > 0 ? <div style={{ width: "49.5%", position: "absolute", top: "14.8%", left: "21%", maxheight: "200px", border: "1px solid grey.300", borderRadius: "19px", backgroundColor: "rgb(245, 244, 242)", display:"flex", flexDirection:"column", justifyContent:"flex-start", alignItems:"baseline" }}>
                        {users.map((element)=>{
                            return(
                                <div key={element.id} style={{padding:"3% 2%"}}>
                                <div style={{fontWeight:"500", fontSize:"20px" }}>{element.creator_mode.creatormode_name}</div>
                                <hr />
                                </div>
                            )
                        })
                    }
                    </div>:<></>
                    }
                    <Button style={{ borderRadius: "25px", backgroundColor: "rgb(255, 66, 77)", color: "white", marginLeft: "2%" }}>Get Started</Button>
                </div>
            </div>
            <div style={{ width: "52%", margin: "auto", textAlign: "center" }}>
                <h1 style={{ fontSize: "42px", fontWeight: "700", color: "black" }}>What's? Patreon</h1>
                <div style={{ fontSize: "20px", marginTop: "5%" }}>On Patreon, you can let your fans become active participants in the work they love by offering them a monthly membership. You give them access to exclusive content, community, and insight into your creative process. In exchange, you get the freedom to do your best work, and the stability you need to build an independent creative career.</div>
            </div>
        </div>
    )
}