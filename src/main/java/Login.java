import java.io.*;

import javax.servlet.http.HttpSession;
import javax.servlet.http.*;
import javax.servlet.*;

import java.sql.*;

// This Servlet handles login with user credentials:
// it requires the parameters "user" and "password" and It will
// check the existance of those credentials over a list of hardcoded
// users. If it finds the credentials, the user will be granted a session.
//
public class Login extends HttpServlet {
  
  // Checks if the user and password exist in the database
  // 
  // Return Value:
  // Return true if the user exists, false otherwise
  //
  // Example:
  // boolean exists = userExists("marco", "p4ssw0rd", dbConnection);
  //
  private boolean userExists(String name, String password, Connection con) {

    if (name == null || password == null) return false;
   
    // Query
    try {
        Statement stmt = con.createStatement();
        String query = "SELECT NAME FROM users WHERE NAME = '"
                       + name + "' AND PASSWORD = '"
                       + password + "'"; 

        ResultSet rs = stmt.executeQuery(query);

        if (rs.next()) {
            // Match
            return true;
        }
        else {
            // No match
            return false;
        }
    }
    catch (SQLException e) {

        return false;
    }
  }

  // Sets up hardcoded profiles, should be removed when the
  // DB gets implemented
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
        String url = "jdbc:derby://localhost:1527/DemoDB";
        Connection con = DriverManager.getConnection(url);

        //Create Java Bean for profile
	ProfileBean profile = new ProfileBean();

	// Get parameters name and password
        profile.setName(req.getParameter("name"));
        profile.setPassword(req.getParameter("password"));

        // Check for existance and create session
        if (userExists(profile.getName(), profile.getPassword(), con)) {

            HttpSession session = req.getSession();
        
            // Thread safe
            synchronized(session) {

                // Set name attribute
                session.setAttribute("name", profile.getName());

                // Set DB connection attribute
                SessionConnection sessionconnection = new SessionConnection(con);
                session.setAttribute("sessionconnection", sessionconnection);
            }

            // Redirect to another page
            // req.getRequestDispatcher("./HelloServlet").forward(req, res);
            res.sendRedirect("/risto89-1.0/profile");
        }
        else {
            
            con.close();
    	    res.sendRedirect("/risto89-1.0/login");
        }

      }
      catch (SQLException e) {

        req.setAttribute("error", "Errore di connessione al database");
        req.getRequestDispatcher("/error").forward(req, res);
      }

  }

  protected void doGet (HttpServletRequest req,
  		     HttpServletResponse res)
     throws ServletException, IOException
  {
    
    res.setCharacterEncoding("UTF-8");
    req.getRequestDispatcher("/Loginpage.jsp").include(req, res);
    
  }
}
