const {ProductsMaster, VariantsMaster, UserDetails, TaxMaster } = require('./models/model'); 
const { format } = require('date-fns');

module.exports.handler = async (event) => {
  try {
    const rows = await ProductsMaster.findAll({
      include: [
        {
          model: VariantsMaster,
          as: 'variant',
          attributes: ['tfv_variant_name'],
        },
        {
          model: UserDetails,
          as: 'user',
          attributes: ['tfu_first_name'],
        },
        {
          model: TaxMaster,
          as: 'tax',
          attributes: ['tftm_tax', 'pk_tftm_id'],
        },
      ],
      order: [['tfpd_updated_date_time', 'DESC']],
    });

    const finalArr = rows.map((row, index) => {
      const obj = {
        id: row.tfpd_product_id,
        productName: row.tfpd_product_name,
        image: row.tfpd_product_image_link,
        description: row.tfpd_product_desc,
        isActive: row.tfpd_is_active,
        statusId: row.tfpd_status_id,
        createdby: row.user.tfu_first_name,
        createdDate: format(row.tfpd_created_date_time, 'yyyy-MM-dd'),
        updatedBy: row.tfpd_updated_by,
        updatedDate: row.tfpd_updated_date_time,
        quantity: row.tfpd_quantity,
        price: row.tfpd_price,
        hsnCode: row.tfpd_hsn_code,
        taxation: row.tax.tftm_tax,
        taxiationId: row.tax.pk_tftm_id,
        variantId: row.tfpd_variant_id,
        variantName: row.variant.tfv_variant_name,
        productType: row.tfpd_product_type,
        legacy: row.tfpd_legacy,
        salable: row.tfpd_salable,
        uomcode: row.tfpd_uom,
        tangable: row.tfpd_tangable,
        installation: row.tfpd_installation,
        //serialNum,
      };
      return obj;
    });


    return {
      statusCode: 200,
      body: JSON.stringify(finalArr),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
