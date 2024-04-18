import java.io.*;

import javax.servlet.http.HttpSession;
import javax.servlet.http.*;
import javax.servlet.*;

import java.util.HashMap;

// This Servlet handles login with user credentials:
// it requires the parameters "user" and "password" and It will
// check the existance of those credentials over a list of hardcoded
// users. If it finds the credentials, the user will be granted a session.
//
// TODO:
// - Change list to a database
// - Redirect to error page
//
public class Login extends HttpServlet {
  
  HashMap<String, String> profiles;

  // Check that the uses exists in the list of existing users
  // 
  // Return Value:
  // Return true if the user exists, false otherwise
  //
  // Example:
  // boolean exists = userExists("marco", "p4ssw0rd");
  //
  private boolean userExists(String name, String password) {
    // In the first draft, we are not implementing a database,
    // the authentication will be based only over hardcoded credentials
    // TODO: Use a database

    if (name == null || password == null) return false;
    
    // Checking name and pawword over a list
    String passwd = profiles.get(name);
    return (passwd != null && passwd.equals(password));
  }

  // Sets up hardcoded profiles, should be removed when the
  // DB gets implemented
  @Override
  public void init(ServletConfig config) throws ServletException {

    super.init(config);

    profiles = new HashMap<String, String>();
    profiles.put("admin", "admin");
    profiles.put("foo", "barr");
  }

  // Clearing the profie hashMap
  @Override
  public void destroy() {
    profiles.clear();
  }

  // Handle POST Requests
  @Override
  protected void doPost (HttpServletRequest req,
                     HttpServletResponse res)
    throws ServletException, IOException
  {

    // Get parameters name and password
    String name = req.getParameter("name");
    String password = req.getParameter("password");


    // Check for existance and create session
    // with an attribute "name"
    if (userExists(name, password)) {

        HttpSession session = req.getSession();
        
        // Thread safe
        synchronized(session) {
            session.setAttribute("name", name);
        }

        // Redirect to another page
        // req.getRequestDispatcher("./HelloServlet").forward(req, res);
        res.sendRedirect("/risto89-1.0/profile");
    }
    else {
    	res.sendRedirect("/risto89-1.0/login");
    }

  }

  protected void doGet (HttpServletRequest req,
  		     HttpServletResponse res)
     throws ServletException, IOException
  {
    req.getRequestDispatcher("/Loginpage.html").include(req, res);

  }
}
