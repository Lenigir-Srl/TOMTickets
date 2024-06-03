package com.lenigir.tomtickets;

import java.io.*;
import javax.servlet.http.*;
import javax.servlet.*;

// This servlet is used to load the events page
public class VisualizzaEventi extends HttpServlet {

  @Override
  public void init(ServletConfig config) throws ServletException {
    super.init(config);

    // Loading the driver
    try {

      Class.forName("org.apache.derby.jdbc.ClientDriver");
    }
    catch (ClassNotFoundException e) {

      throw new ServletException("Driver not found");
    }
  }

  public void doGet (HttpServletRequest req,
                     HttpServletResponse res)
    throws ServletException, IOException
  {

    String tipologia = req.getParameter("tipologia");

    if (tipologia != null) {
        req.setAttribute("tipologia", tipologia);
    }

    // Forwarding the request to the Profile.jsp
    req.getRequestDispatcher("/jsp/Eventi.jsp").forward(req, res);
  
  }

  public void doPost (HttpServletRequest req,
                      HttpServletResponse res)
    throws ServletException, IOException
  {
    doGet(req, res);
  }
}
