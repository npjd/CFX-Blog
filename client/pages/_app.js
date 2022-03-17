import "../styles/globals.css";
import { useState } from "react";
import Link from "next/link";
import { css } from "@emotion/css";
import { AccountContext } from "../context.js";
import { ownerAddress } from "../config";
import "easymde/dist/easymde.min.css";

function MyApp({ Component, pageProps }) {
  /* create local state to save account information after signin */
  const [account, setAccount] = useState(null);

  const connect = async () => {
    await window.conflux.request({ method: "cfx_requestAccounts" });
    let account = (await window.conflux.request({ method: "cfx_accounts" }))[0];
    setAccount(account);
    
  }


  return (
    <div>
      <nav className={nav}>
        <div className={header}>
          <Link href="/">
            <a>
              <div className={titleContainer}>
                <h2 className={title}>Full Stack</h2>
                <p className={description}>Conflux</p>
              </div>
            </a>
          </Link>
          {!account && (
            <div className={buttonContainer}>
              <button className={buttonStyle} onClick={connect} >
                Connect
              </button>
            </div>
          )}
          {account && <p className={accountInfo}>{account}</p>}
        </div>
        <div className={linkContainer}>
          <Link href="/">
            <a className={link}>Home</a>
          </Link>
          {
            /* if the signed in user is the contract owner, we */
            /* show the nav link to create a new post */
            account === ownerAddress && (
              <Link href="/create-post">
                <a className={link}>Create Post</a>
              </Link>
            )
          }
        </div>
      </nav>
      <div className={container}>
        <AccountContext.Provider value={account}>
          <Component {...pageProps} connect={connect} />
        </AccountContext.Provider>
      </div>
    </div>
  );
}

const accountInfo = css`
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  font-size: 12px;
`;

const container = css`
  padding: 40px;
`;

const linkContainer = css`
  padding: 30px 60px;
  background-color: #fafafa;
`;

const nav = css`
  background-color: white;
`;

const header = css`
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.075);
  padding: 20px 30px;
`;

const description = css`
  margin: 0;
  color: #999999;
`;

const titleContainer = css`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
`;

const title = css`
  margin-left: 30px;
  font-weight: 500;
  margin: 0;
`;

const buttonContainer = css`
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const buttonStyle = css`
  background-color: #fafafa;
  outline: none;
  border: none;
  font-size: 18px;
  padding: 16px 70px;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 7px 7px rgba(0, 0, 0, 0.1);
`;

const link = css`
  margin: 0px 40px 0px 0px;
  font-size: 16px;
  font-weight: 400;
`;

export default MyApp;
