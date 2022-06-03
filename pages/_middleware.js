import { NextResponse } from "next/server";

const pageAuthorizations = {
  signedInPages: ["/", "/me/account", "/me/profile", "/users/all"],
  adminPages: ["/addUser"],
  superAdminPages: ["/organizations/all", "/addOrganization"],
};

const middleware = (req) => {
  if (
    pageAuthorizations.signedInPages.find(
      (page) => page === req.nextUrl.pathname
    )
  ) {
    const { FOUNDATION_ACCESS_TOKEN: token } = req.cookies;

    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/signin";
      return NextResponse.rewrite(url);
    }
  }
};
export default middleware;
