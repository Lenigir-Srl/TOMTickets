package com.lenigir.tomtickets;

import java.io.*;
import javax.servlet.http.*;
import javax.servlet.*;

// This Servlet handles the OK page
// You need to pass the OK message as a parameter
// like so:
//
// req.setAttribute("OK", "Account creato con successo!");
// req.getRequestDispatcher("./OK").forward(req,res);
public class OK extends HttpServlet {

  @Override
  public void doGet (HttpServletRequest req,
                     HttpServletResponse res)
    throws ServletException, IOException
  {

    res.setCharacterEncoding("UTF-8");
    req.getRequestDispatcher("/WEB-INF/jsp/OKpage.jsp").include(req, res);
  }

  @Override
  public void doPost (HttpServletRequest req,
                      HttpServletResponse res)
    throws ServletException, IOException
  {
    doGet(req, res);
  }
}
