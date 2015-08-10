<%@ page import="com.johndeere.ssw.client.ControleAcesso" %>

<%
	String JD_REMOTE_USER                      = "null";
   String JD_REMOTE_PW                        = "null";
   String JD_REMOTE_ADDR                      = "null";
   String JD_STATUS                           = "null";
   String JD_AUTHENTICATE                     = "false";
   String JD_DATEHOURLOGON                    = "false";
   String JD_SESSION_ID                       = "null";
   String  sObjeto                   		  =  request.getParameter("hObjeto");

   Cookie[] cookies = request.getCookies();

      if (cookies != null && cookies.length !=0) {
         for(int i = 0; i < cookies.length; i++) {
            if (cookies[i].getName().equals("JD_REMOTE_USER")) {
               JD_REMOTE_USER = ""+cookies[i].getValue();
            }
            if (cookies[i].getName().equals("JD_REMOTE_PW")) {
               JD_REMOTE_PW = ""+cookies[i].getValue();
            }
            if (cookies[i].getName().equals("JD_REMOTE_ADDR")) {
               JD_REMOTE_ADDR = ""+cookies[i].getValue();
            }
            if (cookies[i].getName().equals("JD_STATUS")) {
               JD_STATUS = ""+cookies[i].getValue();
            }
            if (cookies[i].getName().equals("JD_AUTHENTICATE")) {
               JD_AUTHENTICATE = ""+cookies[i].getValue();
            }
            if (cookies[i].getName().equals("JD_DATEHOURLOGON")) {
               JD_DATEHOURLOGON = ""+cookies[i].getValue();
            }
            if (cookies[i].getName().equals("JD_SESSION_ID")) {
               JD_SESSION_ID = ""+cookies[i].getValue();
            }
         }
      }
	  
//String sLogin = JD_REMOTE_USER;
// Se o usuario não estiver logado OU não possuir acesso
//ControleAcesso.valida(sObjeto, sLogin);
//if(sLogin.equals("") || ControleAcesso.getTemAcesso() != 1)
//{
 // %><%response.sendRedirect("error.jsp");%><%
//}

String sLogin = request.getHeader("SM_USER");
System.out.println("sLogin = "+sLogin);

session.setAttribute("user", sLogin);

// Se o usuario nï¿½o estiver logado OU nï¿½o possuir acesso
ControleAcesso.valida(sObjeto, sLogin);

if(sLogin.equals("") || ControleAcesso.getTemAcesso() != 1){
  response.sendRedirect("../error.jsp");
}

%>