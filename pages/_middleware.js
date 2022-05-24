import { NextResponse } from "next/server";

const signedInPages = [
  "/",
  "/users",
  "/users/all",
  "/organizations",
  "/organizations/all",
  "/addUser",
  "/addOrganization",
];

const middleware = (req) => {
  if (signedInPages.find((page) => page === req.nextUrl.pathname)) {
    const { FOUNDATION_ACCESS_TOKEN: token } = req.cookies;

    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/signin";
      return NextResponse.rewrite(url);
    }
  }
};

export default middleware;
