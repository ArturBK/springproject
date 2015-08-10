<%@tag pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core"  prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt"  prefix="fmt"%>
<%@ taglib
 uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib uri="http://www.springframework.org/tags"
 prefix="spring" %>
 <c:set var="contextPath" value="${pageContext.request.contextPath}"/>
<!doctype html>
<!--[if lt IE 7]>
    <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="pt">
<![endif]-->
<!--[if IE 7]>
    <html class="no-js lt-ie9 lt-ie8" lang="pt">
<![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9" lang="pt"><![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="pt">
<!--<![endif]-->
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport"
    content="width=device-width, initial-scale=1,
    maximum-scale=1">

    <link type="text/css" href="${contextPath}/includes/template/default.css" rel="Stylesheet" />
    <link type="text/css" href="${contextPath}/includes/template/CPEDStyle.css" rel="stylesheet" />
    <link type="text/css" href="${contextPath}/includes/template/css/jdTable.css" rel="stylesheet" />
    <link type="text/css" href="${contextPath}/includes/template/css/jdSearch.css" rel="stylesheet" />


    <link href="${contextPath}/includes/template/css/smoothness/jquery-ui-1.10.4.custom.css" rel="stylesheet">

   
    <link href="${contextPath}/includes/template/css/bootstrap-jd.css" rel="stylesheet" type="text/css" />
    <link href="${contextPath}/includes/template/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <link href="${contextPath}/includes/template/css/ionicons.min.css" rel="stylesheet" type="text/css" />
    <link href="${contextPath}/includes/template/css/AdminLTE.css" rel="stylesheet" type="text/css" />
    <link href="${contextPath}/includes/template/css/bootstrapValidator.min.css" rel="stylesheet" type="text/css" />

    <script src="${contextPath}/includes/template/javascript/jquery-1.10.2.js" type="text/javascript"></script>    
    <script src="${contextPath}/includes/jquery.maskedinput.min.js" type="text/javascript"></script>
    <script src="${contextPath}/includes/jquery.twbsPagination.min.js" type="text/javascript"></script>
    

    <script src="${contextPath}/includes/template/javascript/bootstrap.min.js" type="text/javascript"></script>
    <script src="${contextPath}/includes/template/javascript/jquery-ui-1.10.4.js" type="text/javascript"></script>
    <script src="${contextPath}/includes/template/javascript/plugins/iCheck/icheck.min.js" type="text/javascript"></script>
    <script src="${contextPath}/includes/template/javascript/AdminLTE/app.js" type="text/javascript"></script>
    <script type="${contextPath}/text/javascript" src="includes/template/javascript/respond.js"></script>
    <script src="${contextPath}/includes/js/limpaCampos.js" type="text/javascript"></script>
    <script type="text/javascript" src="${contextPath}/includes/js.js"></script>


<%@attribute name="title" required="true" %>
<%@attribute name="extraScripts" fragment="true" %>

<title>${title}</title>
</head>
<body class="skin-green">
    <%@include file="/WEB-INF/header.jsp" %>
    <div class="wrapper row-offcanvas row-offcanvas-left fixed">
       <%@include file="/WEB-INF/menu.jsp" %>
        <aside class="right-side">      
              <section class="content">
                  <jsp:doBody/>
             </section>
        </aside>
        
    </div>
    <jsp:invoke fragment="extraScripts"/>
</body>
</html>