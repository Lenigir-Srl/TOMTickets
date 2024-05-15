import java.io.*;

import javax.servlet.http.HttpSession;
import javax.servlet.http.*;
import javax.servlet.*;

import java.sql.*;

//import DAO.*;
import beans.*;

// This Servlet handles login with user credentials:
// it requires the parameters "user" and "password" and It will
// check the existance of those credentials over a list of hardcoded
// users. If it finds the credentials, the user will be granted a session.
//
public class Login extends HttpServlet {
  
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

        // Get parameters name and password
        String username = req.getParameter("username");
        String password = req.getParameter("password");

        //Create Java Bean for profile
	TentativoAccessoBean tentativoAccessoBean = new TentativoAccessoBean(username, password);
        TentativoAccessoDAO.checkUser(tentativoAccessoBean, con);

        // Check for existance and create session
        if (tentativoAccessoBean.getValid()) {

            HttpSession session = req.getSession();
        
            // Thread safe
            synchronized(session) {

                // Set name attribute
                session.setAttribute("username", username);
		
		if(ProfiloDAO.isAdmin(username, con)){
                    session.setAttribute("isAdmin", true);
		}else{
		    session.setAttribute("isAdmin", false);
		}

                // Set DB connection attribute
                SessionConnection sessionconnection = new SessionConnection(con);
                session.setAttribute("sessionconnection", sessionconnection);
            }

            // Redirect to another page
            // req.getRequestDispatcher("./HelloServlet").forward(req, res);
            req.setAttribute("title", "Login");
	    req.setAttribute("OK", "Accesso nel profilo effettuato con successo!");
            req.setAttribute("description", "Hai inserito le credenziali corrette e adesso ti trovi dentro il tuo profilo.<br>Siamo felici di rivederti, " + username + "!");
	    req.getRequestDispatcher("/OK").forward(req, res);
	}
        else {
            
            con.close();
    	    req.setAttribute("username", username);
	    req.setAttribute("password", password);
	    req.setAttribute("wrongCredentials", true);
            req.getRequestDispatcher("/jsp/Loginpage.jsp").forward(req, res);
	    //res.sendRedirect("/risto89-1.0/login");
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
    req.getRequestDispatcher("/jsp/Loginpage.jsp").include(req, res);
    
  }
}
