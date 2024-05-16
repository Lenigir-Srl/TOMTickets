import java.io.*;

import javax.servlet.http.*;
import javax.servlet.*;

import com.google.gson.*;

import java.sql.*;

import java.util.List;
import java.util.ArrayList;

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

      // Get connection from session,
      // Assuming that the connection is already established
      HttpSession session = req.getSession(false);
      SessionConnection scon = (SessionConnection) session.getAttribute("sessionconnection");

      try {

        if (scon == null) {
          throw new Exception();
        }

        // Getting the profile bean from the dao
        List<EventoBean> eventi = EventoDAO.GetEventi(scon.getConnection());


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
