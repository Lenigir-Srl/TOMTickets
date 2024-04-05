import java.io.*;

import javax.servlet.http.*;
import javax.servlet.*;

public class HelloServlet extends HttpServlet {
	public void doGet (HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    		RequestDispatcher dispatcher = request.getRequestDispatcher("/Homepage.html");
		dispatcher.include(request,response);
 	}

	public void doPost (HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
}
