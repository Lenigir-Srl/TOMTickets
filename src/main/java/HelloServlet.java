import java.io.*;

import javax.servlet.http.*;
import javax.servlet.*;

public class HelloServlet extends HttpServlet {
	public void doGet (HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    		PrintWriter out = response.getWriter();
		DynamicPage printer = new DynamicPage();
		printer.printPage(out, "/hello-world.html");
		out.close();
	}

	public void doPost (HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
}
