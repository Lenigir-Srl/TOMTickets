package com.lenigir.tomtickets;

import com.lenigir.tomtickets.beans.*;
import com.lenigir.tomtickets.DAO.*;

import java.io.*;

import javax.servlet.http.*;
import javax.servlet.*;

// This filter is used to check if the user is an admin
public class AdminFilter implements Filter {

  public void init(FilterConfig fConfig) throws ServletException {}
  
  public void destroy() {}

  public void doFilter (ServletRequest req,
                     ServletResponse res,
                     FilterChain chain)
    throws ServletException, IOException
  {

    HttpServletRequest http_req = (HttpServletRequest) req;

    try {
        if (http_req.getSession(false) == null) {
            throw new Exception();
        }

        HttpSession session = http_req.getSession(false);
        if (session.getAttribute("sessionconnection") == null) {
            throw new Exception();
        }
        
        if (session.getAttribute("username") == null) {
            throw new Exception();
        }

        String username = (String) session.getAttribute("username");
        SessionConnection scon = (SessionConnection) session.getAttribute("sessionconnection");

        if (scon == null) {
            throw new Exception();
        }

        // Check if the user is an admin
        ProfiloBean pb = ProfiloDAO.GetProfiloBean(username, scon.getConnection());
        if (!pb.isAdmin()) {
            throw new Exception();
        }

        chain.doFilter(req, res);

    }
    catch (Exception e) {

        req.setAttribute("error", "Accesso negato"); //Set error message
        req.getRequestDispatcher("/error").forward(req,res); //Redirect to Error.java
    }
  }
}
