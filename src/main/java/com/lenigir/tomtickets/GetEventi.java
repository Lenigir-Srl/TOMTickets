package com.lenigir.tomtickets;

import com.lenigir.tomtickets.beans.*;
import com.lenigir.tomtickets.DAO.*;
import com.lenigir.tomtickets.enums.*;
import java.io.*;
import javax.servlet.http.*;
import javax.servlet.*;
import com.google.gson.*;
import java.sql.*;
import java.util.List;

// This servlet is used to handle the event management
public class GetEventi extends HttpServlet {

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

      String url = "jdbc:derby://localhost:1527/DerbyDB";

      String tipologia = req.getParameter("tipologia");
      TipologiaEventoEnum tipologiaEnum = null;

      try {

        if (tipologia != null) {
          tipologiaEnum = TipologiaEventoEnum.valueOf(tipologia);
        }

        // Connect to DB
        // We are not useing the session since this servlet
        // can be accessed by anyone
        Connection con = DriverManager.getConnection(url);

        if (con == null) {
          throw new Exception();
        }

        // Getting the eventi beans from the dao
        List<EventoBean> eventi = null;
        if (tipologia != null) {
            eventi = EventoDAO.GetEventiTipologia(con, tipologiaEnum);
        }
        else {
            eventi = EventoDAO.GetEventi(con);
        }

        // Convert list to json
        String jsonArray = new Gson().toJson(eventi);

        // Set response content type to JSON
        res.setContentType("application/json");
        res.setCharacterEncoding("UTF-8");

        // Write JSON to response
        PrintWriter out = res.getWriter();
        out.println(jsonArray);

      }
      catch (Exception e) {

          req.setAttribute("error", "(Gestione Eventi) Errore di connessione al database, " + e.getMessage());
          req.getRequestDispatcher("/error").forward(req, res);
      }
  }

  public void doPost (HttpServletRequest req,
                      HttpServletResponse res)
    throws ServletException, IOException
  {
    doGet(req, res);
  }
}
