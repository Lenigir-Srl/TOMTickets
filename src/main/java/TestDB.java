import java.io.*;

import javax.servlet.http.*;
import javax.servlet.*;

import java.sql.*;

import java.util.List;

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
        String url = "jdbc:derby://localhost:1527/DerbyDB";
        Connection con = DriverManager.getConnection(url);

        PrintWriter out = res.getWriter();

        // Profili

        // Some examples
        ProfiloBean profilo1 = new ProfiloBean("John", "Doe", "1990-05-15",
                                       "john@example.com", "+123456789",
                                       "johndoe", "password123", 5, false);

        ProfiloBean profilo2 = new ProfiloBean("Alice", "Smith", "1985-10-20",
                                       "alice@example.com", "+987654321",
                                       "alicesmith", "secret", 10, true);

        ProfiloBean profilo3 = new ProfiloBean("Bob", "Johnson", "1982-03-25",
                                       "bob@example.com", "+1122334455", "bobjohnson",
                                       "mysecret", 20, true);
       

        // Test those functions
        
        // AgiungiProfilo
        ProfiloDAO.AggiungiProfilo(profilo1, con);
        ProfiloDAO.AggiungiProfilo(profilo2, con);
        
        // EliminaProfilo
        //ProfiloDAO.EliminaProfilo(profilo1, con);

        // GetProfiloBean
        //ProfiloBean prof = ProfiloDAO.GetProfiloBean("admin", con);
        //out.println("I got:");
        //out.println(prof.toString());

        // UserExists
        /*
        if (ProfiloDAO.UserExists(profilo1.getUsername(), con)) {
            out.println("User exist");
        }
        else {
            out.println("User does not exist");
        };
        */

        // GetProfili
        out.println("All the profiles: \n");
        List<ProfiloBean> profili = ProfiloDAO.GetProfili(con);
        for (ProfiloBean p : profili) {
            out.println(p);
        }



        // Eventi

        // sample event
        EventoBean evento1 = new EventoBean("Un bell evento nuovo nuovo", "descrizione qua", "ueywueywuewye", TipologiaEventoEnum.Concerti, LuogoEnum.Trento, "2024-01-01", "11:22", "evento5.jpeg", TipologiaBigliettiEnum.Seduti, 110.0, 0.5, 69); 


        // CreaEvento

        //EventoDAO.AggiungiEvento(evento1, con);

        // EliminaEvento TODO
        //EventoDAO.EliminaEvento(evento1, con);

        // GetEventi
        out.println("All the events: \n");
        List<EventoBean> eventi = EventoDAO.GetEventi(con);
        for (EventoBean e : eventi) {
            out.println(e);
        }

        // GetEvento
        //EventoBean e = EventoDAO.GetEvento("Festival enogastronomico del Garda", con);
        //out.println("I got:");
        //out.println(e);

        // GetSconti
        // out.println("All discounts: \n");
        //List<EventoBean> eventi = EventoDAO.GetSconti(con);
        //for (EventoBean e : eventi) {
        //    out.println(e);
        //}
        
        // EventoExists TODO



        out.close();
      }
      catch (SQLException e) {

        PrintWriter out = res.getWriter();
        out.println("ERR " + e.getMessage());
        out.close();
      }
  }

  public void doPost (HttpServletRequest req,
                      HttpServletResponse res)
    throws ServletException, IOException
  {
    doGet(req, res);
  }
}
