import java.io.*;

import javax.servlet.http.*;
import javax.servlet.*;

import java.sql.*;

// This servlet tests the connection with the database
//
// Outputs
// - OK if the connection is successful
// - ERR otherwise, with the error message
public class TestDB extends HttpServlet {

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
    
      try {

        // Connecting
        String url = "jdbc:derby://localhost:1527/DemoDB";
        Connection con = DriverManager.getConnection(url);

        // Query
        Statement stmt = con.createStatement();
        ResultSet rs = stmt.executeQuery("SELECT * FROM users");

        // Output
        PrintWriter out = res.getWriter();

        while (rs.next()) {

            String s = rs.getString("NAME");
            out.println(s);
        }

        out.close();
      }
      catch (SQLException e) {

        PrintWriter out = res.getWriter();
        out.println("ERR " + e.getMessage());
        out.close();
      }
  }
}
