const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const UserDetails = sequelize.define(
  "tbl_user_details",
  {
    tfu_user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fk_tfcm_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfu_user_role_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfu_first_name: {
      type: DataTypes.STRING(40),
      allowNull: true,
    },
    tfu_last_name: {
      type: DataTypes.STRING(40),
      allowNull: true,
    },
    tfu_phone: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    tfu_emergency_contact: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    tfu_email: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    tfu_office: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    tfu_home: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },

    tfu_password: {
      type: DataTypes.STRING(60),
      allowNull: true,
    },
    tfu_present_address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    tfu_permanent_address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    tfu_aadhar: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    tfu_ctc: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    tfu_city: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    tfu_consumer_type: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    tfu_mobile:{
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    tfu_alternate_mobile:{
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    tfu_contact_person_Name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    tfu_contact_person_email: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    tfu_contact_person_mobile: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    fk_tfu_state_master_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fk_tfu_district_master_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fk_tfu_mandal_master_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fk_tfu_town_master_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fk_tfu_role_master_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfu_user_type: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    tfu_new_user: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    tfu_is_active: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    tfu_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfu_created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfu_created_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    tfu_updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfu_updated_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    tfu_jwt_token: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    tfu_otp_token: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    tfu_otp_token_expire_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    tfu_forgot_password_otp_token: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    tfu_forgot_password_otp_token_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: false, // Disable automatic timestamps (createdAt, updatedAt)
    tableName: "tbl_user_details", // Define the table name to match the existing table
  }
);

const UserVariantMapping = sequelize.define(
  "user_variant_mapping",
  {
    pk_user_variant_mapping: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fk_user_details_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fk_variants_master_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false, // Disable automatic timestamps (createdAt, updatedAt)
    tableName: "user_variant_mapping", // Define the table name to match the existing table
  }
);

// Define a model for tbl_variants_master table
const VariantsMaster = sequelize.define(
  "tbl_variants_master",
  {
    tfv_variant_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tfv_variant_name: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    tfv_variant_image_link: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    tfv_is_active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    tfv_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfv_created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfv_created_date_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    tfv_updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfv_updated_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    tfv_variant_desc: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    tableName: "tbl_variants_master",
    indexes: [
      {
        name: "tfv_created_by_idx",
        fields: ["tfv_created_by"],
      },
      {
        name: "tfv_updated_by_idx",
        fields: ["tfv_updated_by"],
      },
    ],
  }
);

// Define a model for tbl_address_master table
const AddressMaster = sequelize.define(
  "tbl_address_master",
  {
    tfad_address_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tfad_address_line_1: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    tfad_address_line_2: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    tfad_city: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    tfad_state: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    tfad_zip_code: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    tfad_owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tfad_is_active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    tfad_created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tfad_created_date_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    tfad_updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tfad_updated_date_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    tableName: "tbl_address_master",
    indexes: [
      {
        name: "tfad_created_by_idx",
        fields: ["tfad_owner_id"],
      },
      {
        name: "tfad_updated_by_idx",
        fields: ["tfad_updated_by"],
      },
    ],
  }
);

// Define a model for tbl_jobs table
const Jobs = sequelize.define(
  "tbl_jobs",
  {
    tfj_job_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tfj_job_name: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    tfj_job_image_link: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    tfj_job_charge: {
      type: DataTypes.DECIMAL(12, 0),
      allowNull: false,
    },
    tfj_job_charge_currency: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "INR",
    },
    tfj_created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tfj_created_date_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    tfj_updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tfj_updated_date_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    tfj_is_active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    tfj_status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "tbl_jobs",
    indexes: [
      {
        name: "tfj_created_by_idx",
        fields: ["tfj_created_by"],
      },
      {
        name: "tfj_updated_by_idx",
        fields: ["tfj_updated_by"],
      },
    ],
  }
);

//define model for districts
const DistrictMaster = sequelize.define(
  "tbl_district_master",
  {
    tfd_district_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tfd_district_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tfd_created_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tfd_created_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    tfd_updated_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tfd_updated_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    fk_tfd_state_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfd_is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    tfd_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false, // Set to true if you have createdAt and updatedAt fields in the table
  }
);

const MandalsMaster = sequelize.define(
  "tbl_mandals_master",
  {
    tfm_mandals_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tfm_mandals_name: {
      type: DataTypes.STRING(255),
    },
    tfm_status_id: {
      type: DataTypes.INTEGER,
    },
    tfm_created_by: {
      type: DataTypes.STRING(255),
    },
    tfm_mandals_zipcode: {
      type: DataTypes.STRING(10),
    },
    tfm_created_date_time: {
      type: DataTypes.DATE,
    },
    tfm_updated_by: {
      type: DataTypes.STRING(255),
    },
    tfm_updated_date_time: {
      type: DataTypes.DATE,
    },
    fk_tfm_state_id: {
      type: DataTypes.INTEGER,
    },
    fk_tfm_district_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false, // Disable automatic timestamps (createdAt, updatedAt)
  }
);

//define model for problem master
const ProblemsMaster = sequelize.define(
  "tbl_problems_master",
  {
    tfpr_problem_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tfpr_problem_name: {
      type: DataTypes.STRING(40),
      allowNull: true,
    },
    tfpr_variant_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfpr_product_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfpr_problem_desc: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    tfpr_problem_image_link: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    tfpr_problem_price: {
      type: DataTypes.DECIMAL(12, 0),
      allowNull: true,
    },
    tfpr_problem_price_currency: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "INR",
    },
    tfpr_is_active: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
    },
    tfpr_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfpr_created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfpr_created_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    tfpr_updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfpr_updated_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    tableName: "tbl_problems_master",
    indexes: [
      {
        name: "tfpr_created_by_idx",
        fields: ["tfpr_created_by"],
      },
      {
        name: "tfpr_updated_by_idx",
        fields: ["tfpr_updated_by"],
      },
    ],
  }
);

// Define a model for tbl_products_master table
const ProductsMaster = sequelize.define(
  "tbl_products_master",
  {
    tfpd_product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tfpd_product_name: {
      type: DataTypes.STRING(40),
      allowNull: true,
    },
    tfpd_product_image_link: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    tfpd_product_desc: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    tfpd_is_active: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
    },
    tfpd_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfpd_created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tfpd_created_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    tfpd_updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfpd_updated_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    tfpd_quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfpd_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    tfpd_hsn_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fk_tftm_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tfpd_variant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tfpd_product_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfpd_salable: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfpd_legacy: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    tfpd_uom: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    tfpd_tangable: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    tfpd_installation: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
  },
  {
    tableName: "tbl_products_master",
    indexes: [
      {
        name: "tfpd_created_by_idx",
        fields: ["tfpd_created_by"],
      },
      {
        name: "tfpd_updated_by_idx",
        fields: ["tfpd_updated_by"],
      },
    ],
  }
);

//tax
const TaxMaster = sequelize.define(
  "tbl_tax_master",
  {
    pk_tftm_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tftm_tax: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    tftm_created_by: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    tftm_created_date_time: {
      // type: DataTypes.TIMESTAMP,
      // defaultValue: DataTypes.NOW,
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    tftm_updated_by: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    tftm_updated_date_time: {
      // type: DataTypes.TIMESTAMP,
      // defaultValue: null,
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    tftm_status_id: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  },
  {
    timestamps: false, // Disable automatic timestamps
  }
);

// Define a model for tbl_state_master table
const StateMaster = sequelize.define(
  "tbl_state_master",
  {
    tfs_state_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fk_tfs_country_id: {
      type: DataTypes.INTEGER,
    },
    tfs_country_name: {
      type: DataTypes.STRING(255),
    },
    tfs_state_name: {
      type: DataTypes.STRING(255),
    },
    tfs_status_id: {
      type: DataTypes.INTEGER,
    },
    tfs_created_by: {
      type: DataTypes.STRING(255),
    },
    tfs_created_date_time: {
      type: DataTypes.DATE,
    },
    tfs_updated_by: {
      type: DataTypes.STRING(255),
    },
    tfs_updated_date_time: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false, // Disable automatic timestamps (createdAt, updatedAt)
  }
);

// Define a model for tbl_status_master table
const StatusMaster = sequelize.define(
  "tbl_status_master",
  {
    tfsm_status_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tfsm_status_name: {
      type: DataTypes.STRING(40),
    },
    tfsm_is_active: {
      type: DataTypes.INTEGER,
    },
    tfsm_created_by: {
      type: DataTypes.INTEGER,
    },
    tfsm_created_date_time: {
      type: DataTypes.DATE,
    },
    tfsm_updated_by: {
      type: DataTypes.INTEGER,
    },
    tfsm_updated_date_time: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false, // Disable automatic timestamps (createdAt, updatedAt)
  }
);

//RolesMaster
const RolesMaster = sequelize.define(
  "tbl_roles_master",
  {
    pk_tbl_roles_master_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    role: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    timestamps: false,
  }
);

const WarrantyCases = sequelize.define(
  "tbl_warranty_cases",
  {
    pk_tbl_warranty_cases_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    warranty_case: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    warranty_applicable: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    warranty_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    timestamps: false,
  }
);

//Define a model for withCarriers
const WithCarriersMaster = sequelize.define(
  "tbl_with_carriers_master",
  {
    tfwc_with_carriers_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    tfwc_with_carriers_name: {
      type: DataTypes.STRING(40),
      allowNull: true,
    },
    tfwc_with_carriers_image_link: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    tfwc_with_carriers_desc: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    tfwc_is_active: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    tfwc_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
    },
    tfwc_created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfwc_created_date_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    tfwc_updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfwc_updated_date_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    fk_tfwc_varient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fk_tfwc_product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false, // Disable automatic timestamps (createdAt, updatedAt)
  }
);

// Define a model for tbl_user_dummy_details table
const UserDummyDetails = sequelize.define(
  "tbl_user_dummy_details",
  {
    tfud_user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    tfud_username: {
      type: DataTypes.STRING(255),
    },
    tfud_email: {
      type: DataTypes.STRING(255),
    },
    tfud_password: {
      type: DataTypes.STRING(255),
    },
    tfud_created_by: {
      type: DataTypes.STRING(255),
    },
    tfud_created_date_time: {
      type: DataTypes.DATE,
    },
    tfud_updated_by: {
      type: DataTypes.STRING(255),
    },
    tfud_updated_date_time: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false, // Disable automatic timestamps (createdAt, updatedAt)
  }
);

//products type table
const ProductsTypes = sequelize.define(
  "tbl_products_type",
  {
    tfpt_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tfpt_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    tfpt_created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfpt_created_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    tfpt_updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfpt_updated_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    // Additional options for the table
    tableName: "tbl_products_type",
    timestamps: false, // If you don't want timestamps (createdAt and updatedAt) in the table
  }
);
//model for countryMaster
const CountryMaster = sequelize.define(
  "tbl_country_master",
  {
    tfcm_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tfcm_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tfcm_created_by: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tfcm_created_date_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    tfcm_updated_by: {
      type: DataTypes.STRING,
      allowNull: true, // Allow null as it might not be updated yet
    },
    tfcm_updated_date_time: {
      type: DataTypes.DATE,
      allowNull: true, // Allow null as it might not be updated yet
    },
  },
  {
    timestamps: false, // Set this to true if your table has createdAt and updatedAt fields
  }
);
//model for town
const TownMaster = sequelize.define(
  "tbl_town_master",
  {
    tft_town_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tft_town_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tft_status_id: {
      type: DataTypes.INTEGER,
    },
    tft_created_by: {
      type: DataTypes.STRING,
    },
    tft_created_date_time: {
      type: DataTypes.DATE,
    },
    tft_updated_by: {
      type: DataTypes.STRING,
    },
    tft_updated_date_time: {
      type: DataTypes.DATE,
    },
    fk_tft_state_id: {
      type: DataTypes.INTEGER,
    },
    fk_tft_district_id: {
      type: DataTypes.INTEGER,
    },
    fk_tft_mandals_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "tbl_town_master", // Make sure to set the correct table name
    timestamps: false, // If your table has createdAt and updatedAt fields, set this to true
  }
);
//model for tbl_consumer_master
const ConsumerMaster = sequelize.define(
  "tbl_consumer_master",
  {
    pk_tbl_consumer_master_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    consumer_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    consumer_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    consumer_address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    consumer_phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    consumer_alternate_phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    consumer_moble: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    consumer_alternate_mobile: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    consumer_email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fk_state_master_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fk_district_master_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fk_mandal_master_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fk_town_master_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    created_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    updated_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    tfcm_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    tableName: "tbl_consumer_master",
  }
);

//package master
const AmcPackageMaster = sequelize.define(
  "tbl_amc_package_master",
  {
    pk_tfpk_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tfpk_package_name: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    tfpk_package_amount: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    fk_tfpm_period_master_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfpk_min_visits: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfpk_max_visits: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fk_tfpd_products_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfpk_remote_support: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfpk_package_des: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    tfpk_package_created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfpk_package_created_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    tfpk_package_updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfpk_package_updated_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    tfpk_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
    },
  },
  {
    tableName: "tbl_amc_package_master",
    timestamps: false,
  }
);

//product mapping
const ProductsPackageMapping = sequelize.define(
  "tbl_products_package_mapping",
  {
    pk_tfppm_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fk_tfpd_product_master_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fk_tfpk_package_master_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfppm_quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfppm_status_id: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    tfppm_created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfppm_created_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    tfppm_updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfppm_updated_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "tbl_products_package_mapping",
    timestamps: false,
  }
);

//period table
const AmcPeriodMaster = sequelize.define(
  "tbl_amc_period_master",
  {
    pk_tfpm_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tfpm_period: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    tfpm_created_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    tfpm_created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfpm_updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfpm_updated_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    tfpm_status_id: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  },
  {
    tableName: "tbl_amc_period_master",
    timestamps: false,
  }
);

//amc table
const AmcMaster = sequelize.define(
  "tbl_amc_master",
  {
    pk_tfam_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tfam_amc_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tfam_spares: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tfam_discount_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    fk_tfhom_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fk_tfpm_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfam_office_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tfam_contact_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tfam_mobile_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tfam_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tfam_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tfam_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfam_created_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tfam_created_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    tfam_updated_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tfam_updated_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    // Optional table name if you want to customize the table name
    tableName: "tbl_amc_master",
    // Optional timestamps to automatically manage createdAt and updatedAt fields
    timestamps: false,
  }
);

//amc package mapping
const AmcPackageMapping = sequelize.define(
  "tbl_amc_package_mapping",
  {
    pk_tfapm_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fk_tfam_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fk_tfpm_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tfapm_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfapm_created_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tfapm_created_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    tfapm_updated_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tfapm_updated_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    // Optional table name if you want to customize the table name
    tableName: "tbl_amc_package_mapping",
    // Optional timestamps to automatically manage createdAt and updatedAt fields
    timestamps: false,
  }
);

//Head Office Master
const HeadOffice = sequelize.define(
  "tbl_head_office_master",
  {
    pk_tfhom_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tfhom_head_office_name: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    tfhom_status_id: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    tfhom_created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfhom_created_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    tfhom_updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfhom_updated_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    // Optional: You can define additional options for the model here
    tableName: "tbl_head_office_master", // Specify the actual table name if different from the model name
    timestamps: false, // If you don't want Sequelize to manage createdAt and updatedAt fields
    // Other options can be defined here as per your requirements
  }
);

// //ComplaintMaster
const ComplaintMaster = sequelize.define(
  "tbl_complaint_master",
  {
    pk_tfcom_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tfcom_complaint_type: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    tfcom_status_id: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    tfcom_created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfcom_created_date_time: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    tfcom_updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfcm_updated_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: false, // Set this to true if you want Sequelize to manage createdAt and updatedAt fields
    tableName: "tbl_complaint_master",
  }
);

// CustomerTypeMaster
const CustomerTypeMaster = sequelize.define(
  "tbl_customer_type_master",
  {
    pk_tfcm_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tfcm_customer_type: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    tfcm_status_id: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    tfcm_created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfcm_created_date_time: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    tfcm_updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfcm_updated_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: false, // Set this to true if you want Sequelize to manage createdAt and updatedAt fields
    tableName: "tbl_customer_type_master",
  }
);

//JobTypeMaster
const JobTypeMaster = sequelize.define(
  "tbl_job_type_master",
  {
    pk_tfjtm_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tfjtm_job_type: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    tfjtm_status_id: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    tfjtm_created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfjtm_created_date_time: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    tfjtm_updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfjtm_updated_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: false, // Set this to true if you want Sequelize to manage createdAt and updatedAt fields
    tableName: "tbl_job_type_master",
  }
);

// primary analysis inword/onsite
const PrimaryAnalysisInword = sequelize.define('tbl_prmary_analysis_inword', {
  pk_tfpai_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  tfpai_name: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  tfpai_created_by: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  tfpai_created_date_time: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  },
  tfpai_updated_by: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  tfpai_updated_date_time: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'tbl_prmary_analysis_inword',
  timestamps: false 
});

//JobCardMaster
const JobCardMaster = sequelize.define(
  "tbl_job_card_master",
  {
    pk_tfjcm_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tfjcm_job_id: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    fk_tfcm_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fk_tfjtm_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fk_tfcom_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfjcm_customer_mobile: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    tfjcm_email: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    fk_tfja_assign_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    // tfjcm_job_card_status: {
    //   type: DataTypes.STRING(200),
    //   allowNull: true,
    // },
    fk_tfu_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fk_tfv_variant_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fk_tfpd_product_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fk_tfpr_problem_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fk_tfwc_with_carriers_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfjcm_manufacturer: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    tfjcm_serial_num: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    tfjcm_dependency_job_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    tfjcm_remarks: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    tfjcm_address: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    // tfjcm_assign_status: {
    //   type:DataTypes.STRING(255),
    //   allowNull: true,
    // },
    tfjcm_status_id: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    tfjcm_assigned_to: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfjcm_created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfjcm_created_date_time: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    tfjcm_updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfjcm_updated_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    timestamps: false, // Set this to true if you want Sequelize to manage createdAt and updatedAt fields
    tableName: "tbl_job_card_master",
  }
);

// Job Assign Master
const JobAssign = sequelize.define(
  "tbl_job_assign",
  {
    pk_tfja_assign_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    tfja_assign_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    tfja_created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfja_created_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    tfja_updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    tfja_updated_date_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
  
  tfja_assign_name: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  tfja_created_by: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  tfja_created_date_time: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
  },
  tfja_updated_by: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  tfja_updated_date_time: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
  },
}, {
  tableName: 'tbl_job_assign',
  timestamps: false, // Set to true if you want Sequelize to manage timestamps
});

//job card history
const JobCardHistoryMaster = sequelize.define('tbl_job_card_history_master', {
  tfjchm_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  fk_tfjcm_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  fk_tfu_user_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  fk_tfja_assign_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  tfjchm_created_date: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  },
  tfjchm_description: {
    type: DataTypes.STRING(200),
    allowNull: true
  }
}, {
  tableName: 'tbl_job_card_history_master',
  timestamps: false // If you want Sequelize to manage timestamps, set this to true
});

VariantsMaster.belongsTo(UserDetails, {
  foreignKey: "tfv_created_by",
  targetKey: "tfu_user_id",
  as: "user",
});

AddressMaster.belongsTo(UserDetails, {
  foreignKey: "tfad_owner_id",
  targetKey: "tfu_user_id",
  as: "owner",
});
AddressMaster.belongsTo(UserDetails, {
  foreignKey: "tfad_updated_by",
  targetKey: "tfu_user_id",
  as: "updatedBy",
});

Jobs.belongsTo(UserDetails, {
  foreignKey: "tfj_created_by",
  targetKey: "tfu_user_id",
  as: "createdBy",
});
Jobs.belongsTo(UserDetails, {
  foreignKey: "tfj_updated_by",
  targetKey: "tfu_user_id",
  as: "updatedBy",
});

ProblemsMaster.belongsTo(UserDetails, {
  foreignKey: "tfpr_created_by",
  targetKey: "tfu_user_id",
  as: "user",
});
ProblemsMaster.belongsTo(UserDetails, {
  foreignKey: "tfpr_updated_by",
  targetKey: "tfu_user_id",
  as: "updatedBy",
});

ProductsMaster.belongsTo(UserDetails, {
  foreignKey: "tfpd_created_by",
  targetKey: "tfu_user_id",
  as: "user",
});
ProductsMaster.belongsTo(UserDetails, {
  foreignKey: "tfpd_updated_by",
  targetKey: "tfu_user_id",
  as: "updatedBy",
});
ProductsMaster.belongsTo(VariantsMaster, {
  foreignKey: "tfpd_variant_id",
  targetKey: "tfv_variant_id",
  as: "variant",
});
MandalsMaster.belongsTo(StateMaster, {
  foreignKey: "fk_tfm_state_id",
  targetKey: "tfs_state_id",
  as: "state",
});
DistrictMaster.belongsTo(StateMaster, {
  foreignKey: "fk_tfd_state_id",
  targetKey: "tfs_state_id",
  as: "state",
});
MandalsMaster.belongsTo(DistrictMaster, {
  foreignKey: "fk_tfm_district_id",
  targetKey: "tfd_district_id",
  as: "district",
});
UserDetails.hasMany(UserVariantMapping, {
  foreignKey: "fk_user_details_id",
});
UserVariantMapping.belongsTo(UserDetails, {
  foreignKey: "fk_user_details_id",
  as: "user_variant_mappings",
});
UserVariantMapping.belongsTo(VariantsMaster, {
  foreignKey: "fk_variants_master_id",
  targetkey: "tfv_variant_id",
  as: "variant",
});
UserDetails.belongsTo(RolesMaster, {
  foreignKey: "fk_tfu_role_master_id",
  as: "role", // Alias to access the role details
});

RolesMaster.hasMany(UserDetails, {
  foreignKey: "fk_tfu_role_master_id",
  as: "users", // Alias to access the associated users
});
ProblemsMaster.belongsTo(VariantsMaster, {
  foreignKey: "tfpr_variant_id",
  targetKey: "tfv_variant_id",
  as: "variant",
});
ProblemsMaster.belongsTo(ProductsMaster, {
  foreignKey: "tfpr_product_id",
  targetKey: "tfpd_product_id",
  as: "product",
});
WithCarriersMaster.belongsTo(VariantsMaster, {
  foreignKey: "fk_tfwc_varient_id",
  targetKey: "tfv_variant_id",
  as: "variant",
});
WithCarriersMaster.belongsTo(ProductsMaster, {
  foreignKey: "fk_tfwc_product_id",
  targetKey: "tfpd_product_id",
  as: "product",
});
WarrantyCases.belongsTo(UserDetails, {
  foreignKey: "created_by",
  targetKey: "tfu_user_id",
  as: "user",
});
ConsumerMaster.belongsTo(StateMaster, {
  foreignKey: "fk_state_master_id",
  targetKey: "tfs_state_id",
  as: "state",
});

ConsumerMaster.belongsTo(DistrictMaster, {
  foreignKey: "fk_district_master_id",
  targetKey: "tfd_district_id",
  as: "district",
});
ConsumerMaster.belongsTo(MandalsMaster, {
  foreignKey: "fk_mandal_master_id",
  targetKey: "tfm_mandals_id",
  as: "mandal",
});
ConsumerMaster.belongsTo(TownMaster, {
  foreignKey: "fk_town_master_id",
  targetKey: "tft_town_id",
  as: "town",
});

// AmcPackageMaster model
AmcPackageMaster.belongsTo(AmcPeriodMaster, {
  foreignKey: "fk_tfpm_period_master_id",
  as: "periodMaster",
});

// AmcPeriodMaster model
AmcPeriodMaster.hasMany(AmcPackageMaster, {
  foreignKey: "fk_tfpm_period_master_id",
  as: "amcPackages",
});

// ProductsMaster model
ProductsMaster.hasMany(ProductsPackageMapping, {
  foreignKey: "fk_tfpd_product_master_id",
  as: "product",
});


ProductsMaster.belongsTo(TaxMaster, {
  foreignKey: "fk_tftm_id",
  targetKey: "pk_tftm_id",
  as: "tax",
});

// ProductsPackageMapping model
ProductsPackageMapping.belongsTo(ProductsMaster, {
  foreignKey: "fk_tfpd_product_master_id",
  as: "product",
});

// AmcPackageMaster model
AmcPackageMaster.hasMany(ProductsPackageMapping, {
  foreignKey: "fk_tfpk_package_master_id",
  as: "amcPackage",
});

// ProductsPackageMapping model
ProductsPackageMapping.belongsTo(AmcPackageMaster, {
  foreignKey: "fk_tfpk_package_master_id",
  as: "amcPackage",
});

TownMaster.belongsTo(StateMaster, {
  foreignKey: "fk_tft_state_id",
  targetKey: "tfs_state_id",
  as: "state",
});
TownMaster.belongsTo(DistrictMaster, {
  foreignKey: "fk_tft_district_id",
  targetKey: "tfd_district_id",
  as: "district",
});
TownMaster.belongsTo(MandalsMaster, {
  foreignKey: "fk_tft_mandals_id",
  targetKey: "tfm_mandals_id",
  as: "mandal",
});
StateMaster.belongsTo(CountryMaster, {
  foreignKey: "fk_tfs_country_id",
  targetKey: "tfcm_id",
  as: "country",
});
StateMaster.belongsTo(UserDetails, {
  foreignKey: "tfs_created_by",
  targetKey: "tfu_user_id",
  as: "user",
});
DistrictMaster.belongsTo(UserDetails, {
  foreignKey: "tfd_created_by",
  targetKey: "tfu_user_id",
  as: "user",
});
MandalsMaster.belongsTo(UserDetails, {
  foreignKey: "tfm_created_by",
  targetKey: "tfu_user_id",
  as: "user",
});
TownMaster.belongsTo(UserDetails, {
  foreignKey: "tft_created_by",
  targetKey: "tfu_user_id",
  as: "user",
});
WithCarriersMaster.belongsTo(UserDetails, {
  foreignKey: "tfwc_created_by",
  targetKey: "tfu_user_id",
  as: "user",
});

JobCardMaster.belongsTo(ComplaintMaster, {
  foreignKey: "fk_tfcom_id",
  targetKey: "pk_tfcom_id",
  as: "complaint",
});
JobCardMaster.belongsTo(CustomerTypeMaster, {
  foreignKey: "fk_tfcm_id",
  targetKey: "pk_tfcm_id",
  as: "customer",
});
JobCardMaster.belongsTo(JobTypeMaster, {
  foreignKey: "fk_tfjtm_id",
  targetKey: "pk_tfjtm_id",
  as: "jobType",
});
/*JobCardMaster.belongsTo(ConsumerMaster, {
  foreignKey: "fk_tbl_consumer_master_id",
  targetKey: "pk_tbl_consumer_master_id",
  as: "consumer",
});*/
JobCardMaster.belongsTo(ProductsMaster, {
  foreignKey: "fk_tfpd_product_id",
  targetKey: "tfpd_product_id",
  as: "product",
});
JobCardMaster.belongsTo(ProblemsMaster, {
  foreignKey: "fk_tfpr_problem_id",
  targetKey: "tfpr_problem_id",
  as: "problem",
});
JobCardMaster.belongsTo(UserDetails, {
  foreignKey: "tfjcm_created_by",
  targetKey: "tfu_user_id",
  as: "user",
});

JobCardMaster.belongsTo(UserDetails, {
  foreignKey: "fk_tfu_user_id",
  targetKey: "tfu_user_id",
  as: "consumer",
});

JobCardMaster.belongsTo(JobAssign, {
  foreignKey: "fk_tfja_assign_id",
  targetKey: "pk_tfja_assign_id",
  as: "jobAssign",
});

AmcMaster.hasMany(AmcPackageMapping, {
  foreignKey: "fk_tfam_id",
  as: "amc",
});
AmcPackageMapping.belongsTo(AmcMaster, {
  foreignKey: "fk_tfam_id",
  as: "amc",
});
AmcMaster.belongsTo(HeadOffice, {
  foreignKey: "fk_tfhom_id",
  targetKey: "pk_tfhom_id",
  as: "ofc",
});
AmcMaster.belongsTo(UserDetails, {
  foreignKey: "tfam_created_by",
  targetKey: "tfu_user_id",
  as: "user",
});
JobCardHistoryMaster.belongsTo(UserDetails, {
  foreignKey:"fk_tfu_user_id",
  targetKey:"tfu_user_id",
  as:"user"
})
JobCardHistoryMaster.belongsTo(JobCardMaster, {
  foreignKey:"fk_tfjcm_id",
  targetKey:"pk_tfjcm_id",
  as:"jobId"
})
JobCardHistoryMaster.belongsTo(JobAssign, {
  foreignKey:"fk_tfja_assign_id",
  primaryKey:"pk_tfja_assign_id",
  as:"jobAssign"
})


UserDetails.belongsTo(CustomerTypeMaster, {
  foreignKey: "fk_tfcm_id",
  targetKey: "pk_tfcm_id",
  as: "consumerType",
});

module.exports = {
  UserDetails,
  VariantsMaster,
  AddressMaster,
  Jobs,
  MandalsMaster,
  ProblemsMaster,
  ProductsMaster,
  StateMaster,
  StatusMaster,
  UserDummyDetails,
  ProductsTypes,
  DistrictMaster,
  UserVariantMapping,
  RolesMaster,
  WarrantyCases,
  CountryMaster,
  TownMaster,
  WithCarriersMaster,
  ConsumerMaster,
  AmcPackageMaster,
  ProductsPackageMapping,
  AmcPeriodMaster,
  AmcMaster,
  HeadOffice,
  AmcPackageMapping,
  TaxMaster,
  ComplaintMaster,
  CustomerTypeMaster,
  JobCardMaster,
  JobTypeMaster,
  JobAssign,
  PrimaryAnalysisInword,
  JobCardHistoryMaster
};

// Create the tables if they don't exist
(async () => {
  await sequelize.sync();
  console.log("Database synchronized");
})();

