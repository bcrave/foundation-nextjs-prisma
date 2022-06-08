import { NextResponse } from "next/server";
// import * as jose from "jose";

const signedInPages = ["/", "/me/account", "/me/profile", "/users/all"];
const adminPages = ["/addUser"];
const superAdminPages = ["/organizations/all", "/addOrganization"];

const middleware = (req) => {
  const { FOUNDATION_ACCESS_TOKEN: token } = req.cookies;

  /* Check that user is signed in */
  if (signedInPages.find((page) => page === req.nextUrl.pathname)) {
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/signin";
      return NextResponse.rewrite(url);
    }
  }

  /* Check that user has admin permissions */
  // if (adminPages.find((page) => page === req.nextUrl.pathname)) {
  // }
};
export default middleware;
