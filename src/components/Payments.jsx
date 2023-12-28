import React, { useEffect } from "react";
import {
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  InputLeftAddon,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { BsCurrencyDollar, BsFillLockFill } from "react-icons/bs";
import { useState } from "react";
import { Otpmodal } from "./Otpmodal";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleLogOut } from "../redux/auth/actions";
export const Payments = () => {
  console.log("payment rendered");
  const [price, setPrice] = useState("0.00");
  const [cardnum, setCardnum] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCVV] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef();
    const n = useNavigate()
    const dispatch = useDispatch()

  useEffect(() => {
    const p = localStorage.getItem("price");
    setPrice(p);
  }, []);

  // const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div style={{ width: "100%", margin: "30px" }}>
      <div
        style={{
          width: "90%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}>
        <div
          style={{
            width: "55%",
            display: "flex",
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          }}>
          <div style={{ width: "25%", padding: "2%" }}>
            <div style={{ margin: "22% 2%", fontWeight: "500" }}>
              Choose what you pay
            </div>
            <div style={{ margin: "33% 2%", fontWeight: "500" }}>
              Payment details
            </div>
          </div>

          <div>
            <div
              style={{
                margin: "7% 2% 0 2%",
                display: "flex",
                width: "100%",
                alignItems: "center",
              }}>
              <Stack spacing={4} style={{ padding: "0% 0" }}>
                <InputGroup>
                  <InputLeftAddon
                    pointerEvents="none"
                    children={<BsCurrencyDollar color="gray.700" />}
                    style={{ padding: "8% 6%" }}
                  />
                  <Input
                    type="number"
                    value={price}
                    color="gray.700"
                    style={{
                      width: "55%",
                      backgroundColor: "rgb(238, 244, 249)",
                      padding: "8% 4%",
                    }}
                  />
                </InputGroup>
              </Stack>

              <div style={{ fontSize: "14px" }}>
                The minimum price for this tier is ${price}{" "}
              </div>
            </div>

            <div
              style={{
                width: "96%",
                margin: "7% 2% 0 2%",
                padding: "4%",
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              }}>
              <Text mb="8px">Name</Text>
              <Input
                type="text"
                value={name}
                placeholder="Enter Name"
                size="md"
                focusBorderColor="none"
                onChange={(e) => setName(e.target.value)}
                background="rgb(245, 244, 242)"
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  marginTop: "5%",
                }}>
                <Text mb="8px">Card Number</Text>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}>
                  <Input
                    type="number"
                    value={cardnum}
                    placeholder="Enter Card Number Here"
                    size="md"
                    focusBorderColor="none"
                    onChange={(e) => setCardnum(e.target.value)}
                    background="rgb(245, 244, 242)"
                  />
                  <BsFillLockFill
                    style={{ margin: "2%", color: "grey", fontSize: "13px" }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  marginTop: "5%",
                }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "2% 2% 2% 0",
                  }}>
                  <Text mb="8px" style={{ fontSize: "13px" }}>
                    Expiration Date
                  </Text>
                  <Input
                    type="text"
                    value={expiry}
                    placeholder="03/24"
                    size="md"
                    focusBorderColor="none"
                    onChange={(e) => setExpiry(e.target.value)}
                    background="rgb(245, 244, 242)"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "2%",
                  }}>
                  <Text mb="8px" style={{ fontSize: "13px" }}>
                    CVV
                  </Text>
                  <Input
                    type="number"
                    value={cvv}
                    placeholder="123"
                    size="md"
                    focusBorderColor="none"
                    onChange={(e) => setCVV(e.target.value)}
                    background="rgb(245, 244, 242)"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "2% 0 2% 2%",
                  }}>
                  <Text mb="8px" style={{ fontSize: "13px" }}>
                    Postal Code
                  </Text>
                  <Input
                    type="number"
                    value={postalcode}
                    placeholder="12345"
                    size="md"
                    focusBorderColor="none"
                    onChange={(e) => setPostalcode(e.target.value)}
                    background="rgb(245, 244, 242)"
                  />
                </div>
              </div>
              {cardnum === "" ||
              postalcode === "" ||
              cvv === "" ||
              name === "" ||
              expiry === "" ||
              cardnum.length > 16 ||
              cardnum.length < 16 ? (
                <Button
                  colorScheme="blue"
                  width="100%"
                  mt="5%"
                  background="#22549F"
                  disabled>
                  Pay Now
                </Button>
              ) : (
                <>
                  <Button
                    colorScheme="blue"
                    width="100%"
                    mt="5%"
                    background="#22549F"
                    onClick={onOpen}>
                    Pay Now
                  </Button>

                  <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}>
                    <AlertDialogOverlay>
                      <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                          Payment Done
                        </AlertDialogHeader>

                        <AlertDialogBody>
                          Enjoy the patreon membership!
                        </AlertDialogBody>

                        <AlertDialogFooter>
                          <Button
                            colorScheme="blue"
                            onClick={() => {
                              onClose();
                                localStorage.setItem("price", "0");
                                n("/")
                                dispatch(handleLogOut())
                            }}
                            ml={3}>
                            done
                          </Button>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialogOverlay>
                  </AlertDialog>
                </>
              )}
            </div>
          </div>
        </div>

        <div
          style={{
            width: "40%",
            padding: "2%",
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          }}>
          <div style={{ fontWeight: "500" }}>Summary</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "5% 0 5% 0",
            }}>
            <div style={{ fontWeight: "500" }}>${price}</div>
            <div style={{ fontWeight: "500" }}>USD ${price}</div>
          </div>
          <div style={{ display: "flex", color: "blue" }}>
            <div>Show tier description | </div>
            <div>Edit</div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "5% 0 5% 0",
            }}>
            <div style={{ fontWeight: "500" }}>GST (IN)</div>
            <div style={{ fontWeight: "500" }}>
              USD ${parseInt(price) * (18 / 100)}
            </div>
          </div>
          <hr />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "5% 0 5% 0",
            }}>
            <div style={{ fontWeight: "500" }}>Today's Charge</div>
            <div style={{ fontWeight: "500" }}>
              USD ${parseInt(price) * (18 / 100) + parseInt(price)}
            </div>
          </div>
          <hr />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "5% 0 5% 0",
            }}>
            <div style={{ fontWeight: "500" }}>Currency</div>
            <div style={{ fontWeight: "500" }}>USD</div>
          </div>
          <hr />
          <div style={{ margin: "5% 0 5% 0" }}>
            <div style={{ fontWeight: "500" }}>
              Renews automatically on September 3 at 12am UTC
            </div>
            <div>
              You can cancel auto-renew at any time or edit your payment. By
              making this payment, you agree to Patreon's Terms of Use.
            </div>
            <div style={{ margin: "5% 0 5% 0" }}>
              *Depending on your location your bank might charge an additional
              foreign transaction fee for your membership to this Creator.
            </div>
          </div>
        </div>
      </div>
      {/* <Otpmodal props={const { isOpen, onOpen, onClose } = useDisclosure()}/> */}
    </div>
  );
};
