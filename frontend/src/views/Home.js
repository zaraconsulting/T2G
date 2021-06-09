import React from 'react'
import Coach from '../components/Coach'

export const Home = (props) =>
{
  return (
    <div className="dashboard-tab p-4 rounded-lg shadow-xs bg-white">
      <div className="row">
        <div className="col-lg-4 mb-3">
          <div className="card border-0 w-100 p-0 rounded-xxl bg-white theme-light-bg shadow-md">
            <div className="card-body p-4">
              <div className="row">
                <div className="col-6">
                  <h4 className="fw-900 text-success font-xsss mt-0 mb-0 ">
                    -27%
                    </h4>
                  <h2 className="text-grey-900 fw-900 display1-size mt-2 mb-1 ls-3 lh-1">
                    4455
                  </h2>
                  <h4 className="fw-700 text-grey-500 font-xssss ls-3 text-uppercase mb-0 mt-0">

                    UNITS SALE
                    </h4>
                </div>
                <div className="col-6 text-left">
                  <div id="chart-users-blue"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-3">
          <div className="card border-0 w-100 p-0 rounded-xxl bg-white theme-light-bg shadow-md">
            <div className="card-body p-4">
              <div className="row">
                <div className="col-6">
                  <h4 className="fw-900 text-success font-xsss mt-0 mb-0 ">
                    -27%
                    </h4>
                  <h2 className="text-grey-900 fw-900 display1-size mt-2 mb-1 ls-3 lh-1">
                    4455
                  </h2>
                  <h4 className="fw-700 text-grey-500 font-xssss ls-3 text-uppercase mb-0 mt-0">

                    UNITS SALE
                    </h4>
                </div>
                <div className="col-6 text-left">
                  <div id="chart-users-blue"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-3">
          <div className="card border-0 w-100 p-0 rounded-xxl bg-white theme-light-bg shadow-md">
            <div className="card-body p-4">
              <div className="row">
                <div className="col-6">
                  <h4 className="fw-900 text-success font-xsss mt-0 mb-0 ">
                    -27%
                    </h4>
                  <h2 className="text-grey-900 fw-900 display1-size mt-2 mb-1 ls-3 lh-1">
                    4455
                  </h2>
                  <h4 className="fw-700 text-grey-500 font-xssss ls-3 text-uppercase mb-0 mt-0">

                    UNITS SALE
                    </h4>
                </div>
                <div className="col-6 text-left">
                  <div id="chart-users-blue"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-12 mt-0">
          <div className="card w-100 p-0 rounded-xxl border-0 bg-white theme-light-bg  shadow-md">
            <div className="card-body p-4">
              <div className="row">
                <div className="col-9">
                  <h4 className="fw-900 text-success font-xsss mt-0 mb-0 ">
                    -27%
                    </h4>
                  <h2 className="text-grey-900 fw-900 display3-size mt-0 mb-0 lh-1">
                    Placeholder
                  </h2>
                  <h4 className="fw-900 text-grey-500 font-xssss ls-lg text-uppercase mb-0 mt-1">
                    UNITS SALE
                    </h4>
                </div>
                <div className="col-3 text-left">
                  <div id="chart-revinuee"></div>
                </div>
                <div className="col-12 p-0 mt-3">
                  <div id="chart-usersMultiplee"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-6 text-center">
                  <h4 className="fw-600 text-grey-500 font-xssss ls-lg d-flex justify-content-center text-uppercase">
                    <div className="mr-2 bg-success p-2 mt-0 rounded-circle"></div>
                      this week
                    </h4>
                </div>
                <div className="col-6 text-center">
                  <h4 className="fw-600 text-grey-500 font-xssss ls-lg d-flex justify-content-center text-uppercase">
                    <div className="mr-2 bg-instagram p-2 mt-0 rounded-circle"></div>
                      this month
                    </h4>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="col-lg-12 mt-3 cart-wrapper">
          <div className="table-content table-responsive shadow-md">
            <table className="table text-center bg-white rounded-xxl ">
              <h2 className="text-grey-900 fw-900 display3-size mt-0 mb-0 lh-1">
                Coaches
              </h2>
              <Coach />

            </table>
          </div>
        </div>

        {/* <div>
        mapping over all of the coaches to populate all of them
      {props.coaches.map((c, idx) => (
          {props.coaches.map((c, idx) => (
          <Coach/>
        ))}
        </div> */}

        <div className="col-lg-12 mt-3 cart-wrapper">
          <div className="table-content table-responsive shadow-md">
            <table className="table text-center bg-white rounded-xxl ">
              <br />
              <h2 className="text-grey-900 fw-900 display3-size mt-0 mb-0 lh-1">
                Players
              </h2>
              <tbody>
                <tr>
                  <td className="product-thumbnail pl-4 text-left">
                    <img
                      src="https://via.placeholder.com/75x100.png"
                      alt="Product Thumnail"
                      className="w75 rounded-lg"
                    />
                  </td>
                  <td className="product-headline text-left wide-column">
                    <h3>
                      <a href="." className="text-grey-900 fw-600">
                        Super skinny blazer
                        </a>
                    </h3>
                  </td>
                  <td className="product-remove text-right">
                    <a href=".">
                      <i className="ti-trash font-xs text-grey-500"></i>
                    </a>
                    <a href=".">
                      <i className="ti-eye ml-2 font-xs text-grey-500"></i>
                    </a>
                    <a href=".">
                      <i className="ti-pencil ml-2 font-xs text-grey-500"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
