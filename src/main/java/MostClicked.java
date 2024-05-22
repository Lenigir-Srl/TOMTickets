import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import com.google.gson.*;
import java.sql.*;

import java.util.List;

// This servlet is used to handle the event management
public class MostClicked extends HttpServlet {

  @Override
  public void init(ServletConfig config) throws ServletException {
    super.init(config);

    // Loading the driver
    try {
      Class.forName("org.apache.derby.jdbc.ClientDriver");
    } catch (ClassNotFoundException e) {
      throw new ServletException("Driver not found");
    }
  }

  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {

    String url = "jdbc:derby://localhost:1527/DerbyDB";

    try {

      // Connect to DB
      // We are not useing the session since this servlet
      // can be accessed by anyone
      Connection con = DriverManager.getConnection(url);
      
      if (con == null) {
        throw new Exception();
      }

      // Getting the profile bean from the dao
      List<EventoBean> evento = EventoDAO.GetMostClicked(con);

      // Convert evento to JSON
      String jsonEvent = new Gson().toJson(evento);

      // Set response content type to JSON
      res.setContentType("application/json");
      res.setCharacterEncoding("UTF-8");

      // Write JSON to response
      PrintWriter out = res.getWriter();
      out.println(jsonEvent);

    } catch (Exception e) {
      req.setAttribute("error", "(Ottieni Evento) Errore di connessione al database, " + e.getMessage());
      req.getRequestDispatcher("/error").forward(req, res);
    }
  }

  @Override
  protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
    doGet(req, res);
  }
}

