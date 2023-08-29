sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("empsmartfilter.empodatasmartfilterproject.controller.View1", {
            onInit: function () {
                //    this.onReadAll();
            },

            onNavNext: function () {
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                loRouter.navTo("View2");
            },

            // onReadAll: function () {
            //     var that = this;
            //     debugger;

            //       var oModel = new sap.ui.model.odata.ODataModel("/sap/opu/odata/SAP/ZTEST_EMP_SALARY_SRV/?$orderby=EmpId desc")
            //     // var oModel = that.getOwnerComponent().getModel();                


            //             oModel.read("/zemp_detailsSet", {
            //         success: function (odata1) {
            //             var oModel1 = new sap.ui.model.json.JSONModel();

            //             oModel1.setData(odata1);
            //             that.getView().setModel(oModel1, "Data1");
            //             // MessageBox.success("Success");
            //              alert("Success");
            //         },
            //         error: function (oError) {
            //             // MessageBox.error("Error");
            //               alert("Error");
            //         }
            //     });
            // },

        });
    });
