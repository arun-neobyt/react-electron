import React from 'react'

const Stats = () => {
  return (
    <div
    id="kt_sidebar"
    className="sidebar bg-info"
    data-kt-drawer="true"
    data-kt-drawer-name="sidebar"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'200px', '350px': '300px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_sidebar_toggler"
  >
    {/*begin::Sidebar Content*/}
    <div className="d-flex flex-column sidebar-body">
      {/*begin::Sidebar Nav*/}
      <ul
        className="sidebar-nav nav nav-tabs pt-15 pb-5 px-5"
        id="kt_sidebar_tabs"
        role="tablist"
      >
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#kt_sidebar_tab_pane_1"
            id="kt_sidebar_tab_1"
          >
            <img
              alt=""
              src="../../assets/media/svg/logo/purple/aven.svg"
              className="default"
            />
            <img
              alt=""
              src="../../assets/media/svg/logo/colored/aven.svg"
              className="active"
            />
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#kt_sidebar_tab_pane_2"
            id="kt_sidebar_tab_2"
          >
            <img
              alt=""
              src="../../assets/media/svg/logo/purple/kanba.svg"
              className="default"
            />
            <img
              alt=""
              src="../../assets/media/svg/logo/colored/kanba.svg"
              className="active"
            />
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link active"
            data-bs-toggle="tab"
            href="#kt_sidebar_tab_pane_3"
            id="kt_sidebar_tab_3"
          >
            <img
              alt=""
              src="../../assets/media/svg/logo/purple/fox-hub-2.svg"
              className="default"
            />
            <img
              alt=""
              src="../../assets/media/svg/logo/colored/fox-hub-2.svg"
              className="active"
            />
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#kt_sidebar_tab_pane_4"
            id="kt_sidebar_tab_4"
          >
            <img
              alt=""
              src="../../assets/media/svg/logo/purple/tower.svg"
              className="default"
            />
            <img
              alt=""
              src="../../assets/media/svg/logo/colored/tower.svg"
              className="active"
            />
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#kt_sidebar_tab_pane_5"
            id="kt_sidebar_tab_5"
          >
            <img
              alt=""
              src="../../assets/media/svg/logo/purple/treva.svg"
              className="default"
            />
            <img
              alt=""
              src="../../assets/media/svg/logo/colored/treva.svg"
              className="active"
            />
          </a>
        </li>

        
      </ul>
      {/*end::Sidebar Nav*/}

      {/*begin::Sidebar Content*/}
      <div id="kt_sidebar_content" className="py-10 px-5 px-lg-5">
        <div
          className="hover-scroll-y me-lg-n2 pe-lg-2 "
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-offset="0px"
          data-kt-scroll-dependencies="#kt_sidebar_tabs, #kt_sidebar_footer"
          data-kt-scroll-wrappers="#kt_sidebar_content"
        >
          <div className="tab-content">
            <div
              className="tab-pane"
              id="kt_sidebar_tab_pane_1"
              role="tabpanel"
            >
              {/*begin::Card*/}
              <div className="card card-reset bg-transparent">
                {/*begin::Header*/}
                <div className="card-header align-items-center border-0">
                  <h3 className="card-title fw-bold text-white fs-3">
                    DMT
                  </h3>
                </div>
                {/*end::Header*/}

                {/*begin::Body*/}
                <div className="card-body px-3 py-0">
                  {/*begin::Chart*/}
                  <div
                    id="kt_sidebar_tab_1_chart"
                    className="apexcharts-bar-hover-danger"
                    // style="height: 250px"
                  ></div>
                  {/*end::Chart*/}
                </div>
                {/*end: Card Body*/}
              </div>
              {/*end::Card*/}
            </div>

            <div
              Productsv
              className="tab-pane"
              id="kt_sidebar_tab_pane_2"
              role="tabpanel"
            >
              {/*begin::Card*/}
              <div className="card card-reset bg-transparent">
                {/*begin::Header*/}
                <div className="card-header align-items-center border-0">
                  <h3 className="card-title fw-bold text-white fs-3">
                    BBPS
                  </h3>
                </div>
                {/*end::Header*/}

                {/*begin::Body*/}
                <div className="card-body px-3 py-0">
                  {/*begin::Chart*/}
                  <div
                    id="kt_sidebar_tab_2_chart"
                    className="apexcharts-bar-hover-danger"
                    // style="height: 250px"
                  ></div>
                  {/*end::Chart*/}
                </div>
                {/*end: Card Body*/}
              </div>
              {/*end::Card*/}
            </div>

            <div
              className="tab-pane active"
              id="kt_sidebar_tab_pane_3"
              role="tabpanel"
            >
              {/*begin::Card*/}
              <div className="card card-reset bg-transparent">
                {/*begin::Header*/}
                <div className="card-header align-items-center border-0">
                  <h3 className="card-title fw-bold text-white fs-3">
                    AEPS
                  </h3>
                </div>
                {/*end::Header*/}

                {/*begin::Body*/}
                <div className="card-body px-3 py-0">
                  {/*begin::Chart*/}
                  <div
                    id="kt_sidebar_tab_3_chart"
                    className="apexcharts-bar-hover-danger"
                    // style="height: 250px"
                  ></div>
                  {/*end::Chart*/}
                </div>
                {/*end: Card Body*/}
              </div>
              {/*end::Card*/}
            </div>

            <div
              className="tab-pane"
              id="kt_sidebar_tab_pane_4"
              role="tabpanel"
            >
              {/*begin::Card*/}
              <div className="card card-reset bg-transparent">
                {/*begin::Header*/}
                <div className="card-header align-items-center border-0">
                  <h3 className="card-title fw-bold text-white fs-3">
                    mATM
                  </h3>
                </div>
                {/*end::Header*/}

                {/*begin::Body*/}
                <div className="card-body px-3 py-0">
                  {/*begin::Chart*/}
                  <div
                    id="kt_sidebar_tab_4_chart"
                    className="apexcharts-bar-hover-danger"
                    // style="height: 250px"
                  ></div>
                  {/*end::Chart*/}
                </div>
                {/*end: Card Body*/}
              </div>
              {/*end::Card*/}
            </div>

            <div
              className="tab-pane"
              id="kt_sidebar_tab_pane_5"
              role="tabpanel"
            >
              {/*begin::Card*/}
              <div className="card card-reset bg-transparent">
                {/*begin::Header*/}
                <div className="card-header align-items-center border-0">
                  <h3 className="card-title fw-bold text-white fs-3">
                    POS
                  </h3>
                </div>
                {/*end::Header*/}

                {/*begin::Body*/}
                <div className="card-body px-3 py-0">
                  {/*begin::Chart*/}
                  <div
                    id="kt_sidebar_tab_4_chart"
                    className="apexcharts-bar-hover-danger"
                    // style="height: 250px"
                  ></div>
                  {/*end::Chart*/}
                </div>
                {/*end: Card Body*/}
              </div>
              {/*end::Card*/}
            </div>

            <div
              className="tab-pane"
              id="kt_sidebar_tab_pane_6"
              role="tabpanel"
            >
              {/*begin::Card*/}
              <div className="card card-reset bg-transparent">
                {/*begin::Header*/}
                <div className="card-header align-items-center border-0">
                  <h3 className="card-title fw-bold text-white fs-3">
                    Store
                  </h3>
                </div>
                {/*end::Header*/}

                {/*begin::Body*/}
                <div className="card-body px-3 py-0">
                  {/*begin::Chart*/}
                  <div
                    id="kt_sidebar_tab_5_chart"
                    className="apexcharts-bar-hover-danger"
                    // style="height: 250px"
                  ></div>
                  {/*end::Chart*/}
                </div>
                {/*end: Card Body*/}
              </div>
              {/*end::Card*/}
            </div>
          </div>
        </div>
      </div>
      {/*end::Sidebar Content*/}
    </div>
    {/*end::Sidebar Content*/}
  </div>
  )
}

export default Stats