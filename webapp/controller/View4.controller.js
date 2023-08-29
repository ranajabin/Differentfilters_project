sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox, MessageToast, FilterOperator) {
        "use strict";

        return Controller.extend("empsmartfilter.empodatasmartfilterproject.controller.View4", {
            onInit: function () {
                this.onReadAll();
            },

            onReadAll: function () {
                var that = this;
                debugger;

                var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZTEST_EMP_SALARY_SRV/?$orderby=EmpId desc");
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

            onNavBack: function () {
                history.go(-1);
            },

            onNavNext: function () {
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                loRouter.navTo("View5");
            },

            onShowFilters: function (oEvent) {

                if (oEvent.getSource().getText() === "Show-Filters") {
                    oEvent.getSource().setText("Hide-Filters");

                    oEvent.getSource().setIcon("sap-icon://unlocked");
                    this.byId("_idEmpId").setVisible(true);
                    this.byId("_empid").setVisible(true);

                    this.byId("_idEmpNam").setVisible(true);
                    this.byId("_empname").setVisible(true);

                    this.byId("_idEmpMob").setVisible(true);
                    this.byId("_empPhone").setVisible(true);

                    this.byId("_idEmpMail").setVisible(true);
                    this.byId("_empEmail").setVisible(true);

                    this.byId("_idEmpDep").setVisible(true);
                    this.byId("_empDept").setVisible(true);

                    this.byId("_idBPay").setVisible(true);
                    this.byId("_empBPay").setVisible(true);

                    this.byId("_idHra").setVisible(true);
                    this.byId("_empHra").setVisible(true);

                    this.byId("_idSpclA").setVisible(true);
                    this.byId("_empSpclA").setVisible(true);

                    this.byId("_idShftA").setVisible(true);
                    this.byId("_empShftA").setVisible(true);

                    this.byId("_idMPay").setVisible(true);
                    this.byId("_empMPay").setVisible(true);

                    this.byId("_idbtn1").setVisible(true);

                    // this.byId("table1").setMode("MultiSelect");  
                    MessageToast.show("Filter button has been pressed!")
                }
                else {
                    oEvent.getSource().setText("Show-Filters");
                    oEvent.getSource().setIcon("sap-icon://locked");

                    this.byId("_idEmpId").setVisible(false);
                    this.byId("_empid").setVisible(false);

                    this.byId("_idEmpNam").setVisible(false);
                    this.byId("_empname").setVisible(false);

                    this.byId("_idEmpMob").setVisible(false);
                    this.byId("_empPhone").setVisible(false);

                    this.byId("_idEmpMail").setVisible(false);
                    this.byId("_empEmail").setVisible(false);

                    this.byId("_idEmpDep").setVisible(false);
                    this.byId("_empDept").setVisible(false);

                    this.byId("_idBPay").setVisible(false);
                    this.byId("_empBPay").setVisible(false);

                    this.byId("_idHra").setVisible(false);
                    this.byId("_empHra").setVisible(false);

                    this.byId("_idSpclA").setVisible(false);
                    this.byId("_empSpclA").setVisible(false);

                    this.byId("_idShftA").setVisible(false);
                    this.byId("_empShftA").setVisible(false);

                    this.byId("_idMPay").setVisible(false);
                    this.byId("_empMPay").setVisible(false);


                    this.byId("_idbtn1").setVisible(false);

                    // this.byId("table1").setMode("None");    
                    MessageToast.show("Hide-Filter button has been pressed!");
                }
            },

            onFilterSearch: function (oEvent) {
                debugger;

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
                }
                oBinding.filter(aFilter);
            },

            onPressGo: function () {
                debugger;

                // var oBinding = this.getView().byId("Table1").getBinding("rows"),
                var oTable = this.getView().byId("Table1"),
                    oBinding = oTable.getBinding("items");

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
                var sEmpId = this.byId("_empid").getSelectedItems(),
                    sEmpName = this.byId("_empname").getSelectedItems(),
                    sEmpMob = this.byId("_empPhone").getSelectedItems(),
                    sEmpemail = this.byId("_empEmail").getSelectedItems(),
                    sEmpDept = this.byId("_empDept").getSelectedItems(),
                    sBasicPay = this.byId("_empBPay").getSelectedItems(),
                    sHra = this.byId("_empHra").getSelectedItems(),
                    sSpclA = this.byId("_empSpclA").getSelectedItems(),
                    sShftA = this.byId("_empShftA").getSelectedItems(),
                    sMnthlyPay = this.byId("_empMPay").getSelectedItems();


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
                                operator: FilterOperator.EQ,
                                value1: sEmpId[i].getText(),
                            })
                        );
                    }
                    for (var i = 0; i < sEmpName.length; i++) {
                        aFilterEmpName.push(
                            new sap.ui.model.Filter({
                                path: "EmpName",
                                operator: FilterOperator.EQ,
                                value1: sEmpName[i].getText(),
                            })
                        );
                    }
                    for (var i = 0; i < sEmpMob.length; i++) {
                        aFilterEmpMob.push(
                            new sap.ui.model.Filter({
                                path: "EmpPhone",
                                operator: FilterOperator.EQ,
                                value1: sEmpMob[i].getText(),
                            })
                        );
                    }
                    for (var i = 0; i < sEmpemail.length; i++) {
                        aFilterEmpemail.push(
                            new sap.ui.model.Filter({
                                path: "EmpEmail",
                                operator: FilterOperator.EQ,
                                value1: sEmpemail[i].getText(),
                            })
                        );
                    }
                    for (var i = 0; i < sEmpDept.length; i++) {
                        aFIlterEmpDept.push(
                            new sap.ui.model.Filter({
                                path: "EmpDep",
                                operator: FilterOperator.EQ,
                                value1: sEmpDept[i].getText(),
                            })
                        );
                    }
                    for (var i = 0; i < sBasicPay.length; i++) {
                        aFilterBasicPay.push(
                            new sap.ui.model.Filter({
                                path: "BasicPay",
                                operator: FilterOperator.EQ,
                                value1: sBasicPay[i].getText(),
                            })
                        );
                    }
                    for (var i = 0; i < sHra.length; i++) {
                        aFilterHra.push(
                            new sap.ui.model.Filter({
                                path: "Hra",
                                operator: FilterOperator.EQ,
                                value1: sHra[i].getText(),
                            })
                        );
                    }
                    for (var i = 0; i < sSpclA.length; i++) {
                        aFilterSpclA.push(
                            new sap.ui.model.Filter({
                                path: "SplAllowance",
                                operator: FilterOperator.EQ,
                                value1: sSpclA[i].getText(),
                            })
                        );
                    }
                    for (var i = 0; i < sShftA.length; i++) {
                        aFilterShftA.push(
                            new sap.ui.model.Filter({
                                path: "ShiftAllowance",
                                operator: FilterOperator.EQ,
                                value1: sShftA[i].getText(),
                            })
                        );
                    }
                    for (var i = 0; i < sMnthlyPay.length; i++) {
                        aFilterMnthlyPay.push(
                            new sap.ui.model.Filter({
                                path: "MonthlyPay",
                                operator: FilterOperator.EQ,
                                value1: sMnthlyPay[i].getText(),
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

                MessageToast.show("You have pressed Go Button to Filter!");
            },
        });
    });
