sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/export/library",
    "sap/ui/export/Spreadsheet"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox, exportLibrary, Spreadsheet,) {
        "use strict";

        var EdmType = exportLibrary.EdmType;
        // var EdmType = sap.ui.export.EdmType;

        return Controller.extend("empsmartfilter.empodatasmartfilterproject.controller.View2", {
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

            onRemoveAll: function () {
                debugger;
                var that = this;
                var oTable = that.getView().byId("table1");
                // var oSelectedItems = oTable.getSelectedItems();
                var oSelectedIndex = oTable.getSelectedIndices();

                var len = oSelectedIndex.length;

                if (oSelectedIndex.length > 0) {
                    for (var i = 0; i < len; i++) {
                        // var path = oSelectedIndex;
                        var oModel = that.getView().getModel("Data1").getData();
                        var path = oSelectedIndex[i];

                        oModel.results.splice(path, 1);
                        that.getView().getModel("Data1").setData(oModel);
                        // oTable.removeSelections(true);
                    }
                    MessageBox.information("Selected Row Deleted!");

                } else {
                    MessageBox.warning("Please Select a row to Delete!");
                }
            },

            onNavBack: function () {
                history.go(-1);
            },

            onnavNext: function () {
                var router = new sap.ui.core.UIComponent.getRouterFor(this);
                router.navTo("View3");
            },

            createColumnConfig: function () {
                var aCols = [];

                aCols.push({
                    label: 'Employee ID',
                    type: EdmType.String,
                    property: 'EmpId'
                });

                aCols.push({
                    label: 'Employee Name',
                    type: EdmType.String,
                    property: 'EmpName'
                });

                aCols.push({
                    label: 'Employee Phone',
                    type: EdmType.String,
                    property: 'EmpPhone'
                });

                aCols.push({
                    label: 'Employee Email',
                    type: EdmType.String,
                    property: 'EmpEmail'
                });

                aCols.push({
                    label: 'Employee Department',
                    type: EdmType.String,
                    property: 'EmpDep'
                });

                aCols.push({
                    label: 'Basic Pay',
                    type: EdmType.Int16,
                    property: 'BasicPay'
                });

                aCols.push({
                    label: 'HRA',
                    type: EdmType.Int16,
                    property: 'Hra'
                });

                aCols.push({
                    label: 'Special Allowance',
                    type: EdmType.Int16,
                    property: 'SplAllowance'
                });

                aCols.push({
                    label: 'Shift Allowance',
                    type: EdmType.Int16,
                    property: 'ShiftAllowance'
                });

                aCols.push({
                    label: 'Monthly Pay',
                    type: EdmType.Int16,
                    property: 'MonthlyPay'
                });

                return aCols;
            },

            onExport: function () {
                debugger;
                var aCols, oRowBinding, oSettings, oSheet, oTable;

                // if (!this._oTable) {
                //     this._oTable = this.byId('exportTable');
                // }

                // oTable = this._oTable;
                // oRowBinding = oTable.getBinding('items').mIndices;
                // aCols = this.createColumnConfig();

                aCols = this.createColumnConfig();

                oTable = this.byId('table1');
                oRowBinding = oTable.getBinding('rows').aIndices;
                var TableData = [];
                if (oRowBinding.length == this.getView().getModel("Data1").getData().results.length) {
                    TableData = oTable.getBinding('rows');
                } else {
                    for (var i = 0; i < oRowBinding.length; i++) {
                        TableData.push(this.getView().getModel("Data1").getData().results[oRowBinding[i]]);
                    }
                }

                oSettings = {
                    workbook: {
                        columns: aCols,
                        hierarchyLevel: 'Level'
                    },
                    dataSource: TableData,
                    fileName: 'Table export sample.xlsx',
                    worker: false // We need to disable worker because we are using a MockServer as OData Service
                };

                oSheet = new Spreadsheet(oSettings);
                oSheet.build().finally(function () {
                    oSheet.destroy();
                });
            },

        });
    });
