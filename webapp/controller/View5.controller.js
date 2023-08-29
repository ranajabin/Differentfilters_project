sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox, MessageToast, Fragment) {
        "use strict";

        return Controller.extend("empsmartfilter.empodatasmartfilterproject.controller.View5", {
            onInit: function () {
                this.onReadAll();
            },

            onReadAll: function () {
                var that = this;
                // debugger;

                var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZTEST_EMP_SALARY_SRV/?$orderby=EmpId desc")
                // var oModel = that.getOwnerComponent().getModel();               

                oModel.read("/zemp_detailsSet", {
                    success: function (odata1) {
                        var oModel1 = new sap.ui.model.json.JSONModel();

                        oModel1.setData(odata1);
                        that.getView().setModel(oModel1, "Data1");
                        MessageBox.success("Success");
                        //  alert("Success");
                    },
                    error: function (oError) {
                        MessageBox.error("Error");
                        //   alert("Error");
                    }
                });
            },

            onLoadDialog: function (oEvent) {
                debugger;
                var place1 = oEvent.oSource.mProperties.placeholder;
                // var _id1 = this.byId("_empid").getValue();

                if (!this.pDialog) {
                    this.pDialog = this.loadFragment({
                        name: "empsmartfilter.empodatasmartfilterproject.fragments.fragment1"
                    });
                }

                // this.pDialog.then(function (oDialog) {
                //     oDialog.open();                                    
                // });

                if (place1 === "Enter ID") {
                    this.byId("form1").setTitle("Employee ID");
                }
                else if (place1 === "Enter Name") {
                    this.byId("form1").setTitle("Employee Name");
                }
                else if (place1 === "Mob No.") {
                    this.byId("form1").setTitle("Employee Mob:");
                }
                else if (place1 === "Enter Email") {
                    this.byId("form1").setTitle("Employee Email");
                }
                else if (place1 === "Enter Dept") {
                    this.byId("form1").setTitle("Employee Dept");
                }
                else if (place1 === "Basic Pay") {
                    this.byId("form1").setTitle("Employee Basic Pay");
                }
                else if (place1 === "HRA") {
                    this.byId("form1").setTitle("HRA");
                }
                else if (place1 === "Special A") {
                    this.byId("form1").setTitle("Special Allowance");
                }
                else if (place1 === "Shift A") {
                    this.byId("form1").setTitle("Shift Allowance");
                }
                else if (place1 === "Monthly Pay") {
                    this.byId("form1").setTitle("Monthly Pay");
                }

                this.pDialog.then(function (oDialog) {
                    oDialog.open();

                    // var _id1 = this.byId("_empid").getValue();                   

                });
            },

            cancelpress: function () {
                this.byId("pDialog").close();
            },

            okpress: function () {
                // debugger;
                // var Value2 = this.byId("_idval2").getValue();

                var combo1 = this.byId("_idcmb1").getValue();

                // var sContains = this.byId("_idcntn").getText();
                // var sEqual = this.byId("_idEq").getText();
                // var sBtwn = this.byId("_idbtn").getText();
                // var sStart = this.byId("_idstrt").getText();
                // var sEnd = this.byId("_idend").getText();
                // var sLess = this.byId("_idless").getText();
                // var sLessEq = this.byId("_idlseq").getText();
                // var sGreater = this.byId("_idgreater").getText();
                // var sGrEq = this.byId("_idgreq").getText();

                this.byId("pDialog").close();
                // var combo1 = this.byId("_idcmb1").setValue();               
            },

            onHandleSelection: function () {
                // debugger;
                var combo1 = this.byId("_idcmb1").getValue();
                var sBtwn = this.byId("_idbtn").getText();
                var title1 = this.byId("form1").getTitle();

                if (combo1 === sBtwn && title1 === "Employee ID") {
                    this.byId("_idval1").setVisible(true);
                }
                else {
                    this.byId("_idval1").setVisible(false);
                }
                if (combo1 === sBtwn && title1 === "Employee Name") {
                    this.byId("_idval2").setVisible(true);
                }
                else {
                    this.byId("_idval2").setVisible(false);
                }
                if (combo1 === sBtwn && title1 === "Employee Mob:") {
                    this.byId("_idval3").setVisible(true);
                }
                else {
                    this.byId("_idval3").setVisible(false);
                }
                if (combo1 === sBtwn && title1 === "Employee Email") {
                    this.byId("_idval4").setVisible(true);
                }
                else {
                    this.byId("_idval4").setVisible(false);
                }
                if (combo1 === sBtwn && title1 === "Employee Dept") {
                    this.byId("_idval5").setVisible(true);
                }
                else {
                    this.byId("_idval5").setVisible(false);
                }
                if (combo1 === sBtwn && title1 === "Employee Basic Pay") {
                    this.byId("_idval6").setVisible(true);
                }
                else {
                    this.byId("_idval6").setVisible(false);
                }
                if (combo1 === sBtwn && title1 === "HRA") {
                    this.byId("_idval7").setVisible(true);
                }
                else {
                    this.byId("_idval7").setVisible(false);
                }
                if (combo1 === sBtwn && title1 === "Special Allowance") {
                    this.byId("_idval8").setVisible(true);
                }
                else {
                    this.byId("_idval8").setVisible(false);
                }
                if (combo1 === sBtwn && title1 === "Shift Allowance") {
                    this.byId("_idval9").setVisible(true);
                }
                else {
                    this.byId("_idval9").setVisible(false);
                }
                if (combo1 === sBtwn && title1 === "Monthly Pay") {
                    this.byId("_idval10").setVisible(true);
                }
                else {
                    this.byId("_idval10").setVisible(false);
                }
            },

            onFilterSearch: function (oEvent) {
                // debugger;
                var sQuery = oEvent.getParameter("query"),
                    oTable = this.getView().byId("Table1"),
                    oBinding = oTable.getBinding("items");

                if (oEvent.getId() == "liveChange") {
                    sQuery = oEvent.getParameter("query");
                }
                if (sQuery) {
                    var oFilter1 = new sap.ui.model.Filter('EmpId', 'Contains', sQuery);
                    var oFilter2 = new sap.ui.model.Filter('EmpName', 'Contains', sQuery);
                    var oFilter3 = new sap.ui.model.Filter('EmpPhone', 'Contains', sQuery);
                    var oFilter4 = new sap.ui.model.Filter('EmpEmail', 'Contains', sQuery);
                    var oFilter5 = new sap.ui.model.Filter('EmpDep', 'Contains', sQuery);
                    var oFilter6 = new sap.ui.model.Filter('BasicPay', 'Contains', sQuery);
                    var oFilter7 = new sap.ui.model.Filter('Hra', 'Contains', sQuery);
                    var oFilter8 = new sap.ui.model.Filter('SplAllowance', 'Contains', sQuery);
                    var oFilter9 = new sap.ui.model.Filter('ShiftAllowance', 'Contains', sQuery);
                    var oFilter10 = new sap.ui.model.Filter('MonthlyPay', 'Contains', sQuery);

                    var aFilter = new sap.ui.model.Filter([oFilter1, oFilter2, oFilter3, oFilter4, oFilter5, oFilter6, oFilter7, oFilter8, oFilter9, oFilter10]);
                    // var aFilter = new sap.ui.model.Filter([oFilter1]);
                }
                oBinding.filter(aFilter);
            },

            onPressFilter: function () {
                debugger;

                // var oBinding = this.getView().byId("Table1").getBinding("rows"),
                var oTable = this.getView().byId("Table1"),
                    oBinding = oTable.getBinding("items");

                var combo1 = this.byId("_idcmb1").getValue();
                // var Value2 = this.byId("_idval2").getValue();

                var comboValue1 = this.byId("_idval1").getValue(),
                    comboValue2 = this.byId("_idval2").getValue(),
                    comboValue3 = this.byId("_idval3").getValue(),
                    comboValue4 = this.byId("_idval4").getValue(),
                    comboValue5 = this.byId("_idval5").getValue(),
                    comboValue6 = this.byId("_idval6").getValue(),
                    comboValue7 = this.byId("_idval7").getValue(),
                    comboValue8 = this.byId("_idval8").getValue(),
                    comboValue9 = this.byId("_idval9").getValue(),
                    comboValue10 = this.byId("_idval10").getValue()

                var oFinalFilter = [],
                    aFilterEmpId = [],
                    aFilterEmpName = [],
                    aFilterEmpMob = [],
                    aFilterEmpemail = [],
                    aFIlterEmpDept = [],
                    aFilterBasicPay = [],
                    aFilterHra = [],
                    aFilterSpclA = [],
                    aFilterShftA = [],
                    aFilterMnthlyPay = [];

                //   var sQuery = this.byId("_idName").getSelectedItems()[0].mProperties.text;
                var sEmpId = this.byId("_empid").getTokens(),
                    sEmpName = this.byId("_empname").getTokens(),
                    sEmpMob = this.byId("_empPhone").getTokens(),
                    sEmpemail = this.byId("_empEmail").getTokens(),
                    sEmpDept = this.byId("_empDept").getTokens(),
                    sBasicPay = this.byId("_empBPay").getTokens(),
                    sHra = this.byId("_empHra").getTokens(),
                    sSpclA = this.byId("_empSpclA").getTokens(),
                    sShftA = this.byId("_empShftA").getTokens(),
                    sMnthlyPay = this.byId("_empMPay").getTokens();


                if (
                    !sEmpId.length > 0 && !sEmpName.length > 0 && !sEmpMob.length > 0 &&
                    !sEmpemail.length > 0 && !sEmpDept.length > 0 && !sBasicPay.length > 0 &&
                    !sHra.length > 0 && !sSpclA.length > 0 && !sShftA.length > 0 &&
                    !sMnthlyPay.length > 0
                ) {
                    !oBinding.filter([]);
                } else {
                    for (var i = 0; i < sEmpId.length; i++) {
                        aFilterEmpId.push(
                            new sap.ui.model.Filter({
                                path: "EmpId",
                                operator: combo1,
                                value1: sEmpId[i].getText(),
                                value2: comboValue1,
                            })
                        );
                    }
                    for (var i = 0; i < sEmpName.length; i++) {
                        aFilterEmpName.push(
                            new sap.ui.model.Filter({
                                path: "EmpName",
                                operator: combo1,
                                value1: sEmpName[i].getText(),
                                value2: comboValue2,
                            })
                        );
                    }
                    for (var i = 0; i < sEmpMob.length; i++) {
                        aFilterEmpMob.push(
                            new sap.ui.model.Filter({
                                path: "EmpPhone",
                                operator: combo1,
                                value1: sEmpMob[i].getText(),
                                value2: comboValue3,
                            })
                        );
                    }
                    for (var i = 0; i < sEmpemail.length; i++) {
                        aFilterEmpemail.push(
                            new sap.ui.model.Filter({
                                path: "EmpEmail",
                                operator: combo1,
                                value1: sEmpemail[i].getText(),
                                value2: comboValue4,
                            })
                        );
                    }
                    for (var i = 0; i < sEmpDept.length; i++) {
                        aFIlterEmpDept.push(
                            new sap.ui.model.Filter({
                                path: "EmpDep",
                                operator: combo1,
                                value1: sEmpDept[i].getText(),
                                value2: comboValue5,
                            })
                        );
                    }
                    for (var i = 0; i < sBasicPay.length; i++) {
                        aFilterBasicPay.push(
                            new sap.ui.model.Filter({
                                path: "BasicPay",
                                operator: combo1,
                                value1: sBasicPay[i].getText(),
                                value2: comboValue6,
                            })
                        );
                    }
                    for (var i = 0; i < sHra.length; i++) {
                        aFilterHra.push(
                            new sap.ui.model.Filter({
                                path: "Hra",
                                operator: combo1,
                                value1: sHra[i].getText(),
                                value2: comboValue7,
                            })
                        );
                    }
                    for (var i = 0; i < sSpclA.length; i++) {
                        aFilterSpclA.push(
                            new sap.ui.model.Filter({
                                path: "SplAllowance",
                                operator: combo1,
                                value1: sSpclA[i].getText(),
                                value2: comboValue8,
                            })
                        );
                    }
                    for (var i = 0; i < sShftA.length; i++) {
                        aFilterShftA.push(
                            new sap.ui.model.Filter({
                                path: "ShiftAllowance",
                                operator: combo1,
                                value1: sShftA[i].getText(),
                                value2: comboValue9,
                            })
                        );
                    }
                    for (var i = 0; i < sMnthlyPay.length; i++) {
                        aFilterMnthlyPay.push(
                            new sap.ui.model.Filter({
                                path: "MonthlyPay",
                                operator: combo1,
                                value1: sMnthlyPay[i].getText(),
                                value2: comboValue10,
                            })
                        );
                    }

                    if (aFilterEmpId.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aFilterEmpId,
                        }));
                    }
                    if (aFilterEmpName.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aFilterEmpName,
                        }));
                    }
                    if (aFilterEmpMob.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aFilterEmpMob,
                        }));
                    }
                    if (aFilterEmpemail.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aFilterEmpemail,
                        }));
                    }
                    if (aFIlterEmpDept.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aFIlterEmpDept,
                        }));
                    }
                    if (aFilterBasicPay.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aFilterBasicPay,
                        }));
                    }
                    if (aFilterHra.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aFilterHra,
                        }));
                    }
                    if (aFilterSpclA.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aFilterSpclA,
                        }));
                    }
                    if (aFilterShftA.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aFilterShftA,
                        }));
                    }
                    if (aFilterMnthlyPay.length > 0) {
                        oFinalFilter.push(new sap.ui.model.Filter({
                            and: false,
                            filters: aFilterMnthlyPay,
                        }));
                    }
                    oBinding.filter(oFinalFilter);
                }
                MessageToast.show("You have pressed Filter Button!");
            },

            onNavBack: function () {
                history.go(-1);
            },

            // onNavNext: function () {
            //     var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
            //     loRouter.navTo("View2");
            // },           

        });
    });
