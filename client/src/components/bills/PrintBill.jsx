import { Modal, Button } from "antd";

const PrintBill = (props) => {
  const { isModalOpen, setIsModalOpen } = props;

  return (
    <Modal
      title="Print Invoice"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
      width={800}
    >
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto bg-white px-6">
          <article className="overflow-hidden">
            <div className="logo my-6">
              <h2 className="text-4xl font-bold text-slate-700">LOGO</h2>
            </div>
            <div className="bill-details">
              <div className="grid grid-cols-4 gap-12">
                <div className="text:md text-slate-500">
                  <p className="font-bold text-slate-700">Invoice Details:</p>
                  <p>Unwrapped</p>
                  <p>Fake Street 123</p>
                  <p>San Javier</p>
                  <p>CA 1234</p>
                </div>
                <div className="text:md text-slate-500">
                  <p className="font-bold text-slate-700">Invoice</p>
                  <p>The Boring Company</p>
                  <p>Tesla Street 007</p>
                  <p>Frisco</p>
                  <p>CA 0000</p>
                </div>
                <div className="text:md text-slate-500">
                  <div>
                    <p className="font-bold text-slate-700">Invoice Number:</p>
                    <p>Unwrapped</p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-700 mt-2">
                      Date of Issue:
                    </p>
                    <p>2023-11-21</p>
                  </div>
                </div>
                <div className="text:md text-slate-500">
                  <div>
                    <p className="font-bold text-slate-700">Terms:</p>
                    <p>10 Days</p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-700 mt-2">Due:</p>
                    <p>2024.11.21</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bill-table-area mt-8">
              <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden text-center"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden text-center"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 text-end text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden"
                    >
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="py-4 pr-3">
                      <img
                        src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                        alt=""
                        className="w-12 h-12 object-cover"
                      />
                    </td>
                    <td className="py-4">
                      <span className="font-medium">Spagetti</span>
                    </td>
                    <td className="py-4 text-center">
                      <span>70</span>
                    </td>
                    <td className="py-4 text-center">
                      <span>1</span>
                    </td>
                    <td className="py-4 text-end">
                      <span>70</span>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th className="text-right pt-4" colSpan={4} span="row">
                      <span className="font-normal text-slate-700">
                        Subtotal
                      </span>
                    </th>
                    <th className="text-right pt-4" span="row">
                      <span className="font-normal text-slate-700">70</span>
                    </th>
                  </tr>
                  <tr>
                    <th className="text-right pt-4" colSpan={4} span="row">
                      <span className="font-normal text-slate-700">Tax</span>
                    </th>
                    <th className="text-right pt-4" span="row">
                      <span className="font-normal text-red-600">5.6</span>
                    </th>
                  </tr>
                  <tr>
                    <th className="text-right pt-4" colSpan={4} span="row">
                      <span className="font-bold text-slate-700">Total</span>
                    </th>
                    <th className="text-right pt-4" span="row">
                      <span className="font-bold text-slate-700">75.6</span>
                    </th>
                  </tr>
                </tfoot>
              </table>
              <div className="py-9">
                <div className="border-t pt-9 border-slate-200">
                  <p className="text-sm font-light text-slate-700">
                    Payment terms are 14 days. Please note that according to the
                    Late Payment of Unpackaged Debts Act 0000, freelancers are
                    entitled to charge a 00.00 late fee if debts are not paid
                    after this time, at which point a new invoice will be
                    submitted in addition to this fee. If the revised invoice is
                    not paid within 14 days, additional interest and 8%
                    statutory rate plus 0.5% Bank of England base will be
                    applied to the overdue account, for a total of 8.5%. The
                    parties cannot make a contract other than the provisions of
                    the Law.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <div className="flex justify-end mt-4">
        <Button type="primary" size="large">
          Print
        </Button>
      </div>
    </Modal>
  );
};

export default PrintBill;
