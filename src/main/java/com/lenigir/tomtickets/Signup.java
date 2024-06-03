package com.lenigir.tomtickets;

import com.lenigir.tomtickets.beans.*;
import com.lenigir.tomtickets.DAO.*;
import java.io.*;
import javax.servlet.http.*;
import javax.servlet.*;
import java.sql.*;

// This servlet is used to handle the sign-up process
// It asks for:
// - nome
// - cognome
// - dataNascita
// - email
// - telefono
// - username
// - password
//
public class Signup extends HttpServlet {
  
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

  // Handle POST Requests
  @Override
  protected void doPost (HttpServletRequest req,
                     HttpServletResponse res)
    throws ServletException, IOException
  {

      // DB Connection
      try {

        // Connecting
        String url = "jdbc:derby://localhost:1527/DerbyDB";
        Connection con = DriverManager.getConnection(url);

        // Get parameters 
        String nome = req.getParameter("nome");
        String cognome = req.getParameter("cognome");
        String dataNascita = req.getParameter("dataNascita");
        String email = req.getParameter("email");
        String telefono = req.getParameter("telefono");
        String username = req.getParameter("username");
        String password = req.getParameter("password");
  

        // Check if any of those variable is empty
        if (nome.isEmpty() |
            cognome.isEmpty() ||
            dataNascita.isEmpty() ||
            email.isEmpty() ||
            telefono.isEmpty() ||
            username.isEmpty() ||
            password.isEmpty()) {

            req.setAttribute("error", "Compilare tutti i campi");
            req.getRequestDispatcher("/error").forward(req, res);
        }


        // Check if the user already exists
        if (ProfiloDAO.UserExists(username, con)) {

            req.setAttribute("existingUsername", true);
            req.setAttribute("name", nome);
	    req.setAttribute("surname", cognome);
	    req.setAttribute("dateOfBirth", dataNascita);
	    req.setAttribute("email", email);
	    req.setAttribute("phoneNumber", telefono);
	    req.setAttribute("username", username);
	    req.setAttribute("password", password);
	    req.getRequestDispatcher("/jsp/SignupPage.jsp").forward(req, res);
        }


        //Create Java Bean for profile
        ProfiloBean profiloBean = new ProfiloBean(nome,
                        cognome, dataNascita, email, telefono, username, password, 0, false);
        
        // Insert the user in the database
        ProfiloDAO.AggiungiProfilo(profiloBean, con);


        con.close();

	req.setAttribute("title", "Registrazione");
        req.setAttribute("OK", "Profilo creato con successo!");
    	req.setAttribute("description", "Hai inserito le corrette informazioni e adesso<br>il tuo profilo e' stato creato con successo!<br>Benvenuto/a in TOMTickets, " + username + " siamo felici di averti qui con noi!");
	req.getRequestDispatcher("/OK").forward(req, res);

      }
      catch (Exception e) {

        req.setAttribute("error", "Errore di connessione al database");
        req.getRequestDispatcher("/error").forward(req, res);
      }

  }

  protected void doGet (HttpServletRequest req,
  		     HttpServletResponse res)
     throws ServletException, IOException
  {
    
    res.setCharacterEncoding("UTF-8");
    req.getRequestDispatcher("/jsp/SignupPage.jsp").include(req, res);
    
  }
}
