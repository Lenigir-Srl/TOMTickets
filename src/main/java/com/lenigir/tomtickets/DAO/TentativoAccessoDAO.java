package com.lenigir.tomtickets.DAO;

import com.lenigir.tomtickets.beans.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class TentativoAccessoDAO {
        
    private static final String QUERY = "SELECT * FROM profili WHERE username = ? AND password = ?";
        
    public static void checkUser(TentativoAccessoBean tentativoAccessoBean, Connection con) {

        try {
            PreparedStatement ps = con.prepareStatement(QUERY);
            ps.setString(1, tentativoAccessoBean.getUsername());
            ps.setString(2, tentativoAccessoBean.getPassword());
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                tentativoAccessoBean.setValid(true);
            } else {
                tentativoAccessoBean.setValid(false);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
