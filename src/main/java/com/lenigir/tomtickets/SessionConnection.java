package com.lenigir.tomtickets;

import javax.servlet.http.*;
import java.sql.*;

// Listener to the session object
public class SessionConnection implements HttpSessionBindingListener {

    Connection connection;

    public SessionConnection(  ) {
        connection = null;
    }

    public SessionConnection(Connection connection) {
        this.connection = connection;
    }

    public Connection getConnection(  ) {
        return connection;
    }

    public void setConnection(Connection connection) {
        this.connection = connection;
    }

    public void valueBound(HttpSessionBindingEvent event) {
        if (connection != null) {
            System.out.println("Binding a valid connection");
        }
        else {
            System.out.println("Binding a null connection");
        }
    }

    public void valueUnbound(HttpSessionBindingEvent event) {
        if (connection != null) {

            System.out.println("Closing the bound connection as the session expires");
            try {
                connection.close();
            }
            catch (SQLException ignore) { }
        }
    }
} 
