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

        return Controller.extend("empsmartfilter.empodatasmartfilterproject.controller.View3", {
            onInit: function () {
                this.onReadAll();
            },

            onReadAll: function () {
                var that = this;
                debugger;

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

            onNavBack: function () {
                history.go(-1);
            },

            onnavNext: function () {
                var router = new sap.ui.core.UIComponent.getRouterFor(this);
                router.navTo("View4");
            },

            onPressGo: function () {
                // debugger;

                // var oBinding = this.getView().byId("Table1").getBinding("rows"),
                var oTable = this.getView().byId("Table1"),
                    oBinding = oTable.getBinding("rows");

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
                MessageToast.show("Filter Button has been Pressed!")
            },
        });
    });
