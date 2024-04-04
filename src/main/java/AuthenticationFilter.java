import java.io.*;

import javax.servlet.http.*;
import javax.servlet.*;

// Check that the user making the request has a session
// If that's not the case, It blocks acces to the page
//
// TODO: Redirect to error page
public class AuthenticationFilter implements Filter {

  public void init(FilterConfig fConfig) throws ServletException {}
  
  public void destroy() {}

  public void doFilter (ServletRequest req,
                     ServletResponse res,
                     FilterChain chain)
    throws ServletException, IOException
  {

    HttpServletRequest http_req = (HttpServletRequest) req;

    // Chech session
    if (http_req.getSession(false) == null) {
        
        // TODO: Redirect to error page 
        PrintWriter out = res.getWriter();
        out.println("Sorry, you can't access this page");
        out.close();
       
    }
    else {

        // Continue
        chain.doFilter(req, res);
    }
  }
}
