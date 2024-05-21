import java.io.*;

import javax.servlet.http.*;
import javax.servlet.*;

import com.google.gson.*;

import java.sql.*;

import java.util.List;
import java.util.ArrayList;

// This servlet is used to load the buy event page
public class TerminaAcquisto extends HttpServlet {

  public void doGet (HttpServletRequest req,
                     HttpServletResponse res)
    throws ServletException, IOException
  {

      req.setAttribute("OK", "Tutto e' andato bene");
      req.setAttribute("description", "Il pagamento e' andato a buon fine");

	  // Forwarding the request to the Profile.jsp
      req.getRequestDispatcher("/OK").forward(req, res);
  }

  public void doPost (HttpServletRequest req,
                      HttpServletResponse res)
    throws ServletException, IOException
  {
    doGet(req, res);
  }
}
