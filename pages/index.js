import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout title="Home page">
      <h2 className="text-center underline text-4xl">
        Enrollment Procedures at Anwar Al-Majd International School
      </h2>
      <h3 className="text-center underline text-3xl">
        School Tuition Fees for Academic Year (2023-2024)
      </h3>
      <h4>KG-SECTION</h4>
      <table className="border border-gray-400 w-full text-center">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">KG-SECTION</th>
            <th className="border border-gray-400 px-4 py-2">Tuition Fees</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-2">K G S</td>
            <td className="border border-gray-400 px-4 py-2">12,500 S.R.</td>
          </tr>
        </tbody>
      </table>
      <h4>Primary and Intermediate Schools</h4>
      <table className="border border-gray-400 w-full text-center">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">
              Primary and Intermediate Schools
            </th>
            <th className="border border-gray-400 px-4 py-2">Years</th>
            <th className="border border-gray-400 px-4 py-2">Tuition Fees</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-2">GRADE 1-2-3</td>
            <td className="border border-gray-400 px-4 py-2">Years 6-8</td>
            <td className="border border-gray-400 px-4 py-2">13,000 S.R.</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">GRADE 4-5-6</td>
            <td className="border border-gray-400 px-4 py-2">Years 9-11</td>
            <td className="border border-gray-400 px-4 py-2">14,000 S.R.</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">GRADE 7-8-9</td>
            <td className="border border-gray-400 px-4 py-2">Years 12-14</td>
            <td className="border border-gray-400 px-4 py-2">15,000 S.R.</td>
          </tr>
        </tbody>
      </table>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">
          Student Enrolment Procedures
        </h2>
        <p className="mb-2">
          <strong>General Conditions:</strong> AMIS an American Curriculum
          School accepts children without discrimination of sex, religion, race
          or nationality.
        </p>
        <p className="mb-2">
          Admission to AMIS will be determined by the Director, with the advice
          of the school heads and registrar, based on information obtained with
          respect to:
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>
            The potential of the applicant to benefit from the educational
            services available.
          </li>
          <li>
            The capacity of AMIS to meet the educational needs of the applicant.
          </li>
        </ul>
        <p className="mb-2">
          Applications for admission for the next academic year will be
          considered in order of priority, date of application, and the results
          of entrance examinations and formal interview, as places become
          available.
        </p>
        <p className="mb-2">
          At AMIS, we recognize that the choice of school is one of the most
          important, and therefore the most stressful, aspects of an
          international move. Choice of school often determines choice of
          housing, and we understand the need for an &quot;early&quot;
          confirmation of place at AMIS.
        </p>
        <p className="mb-2">
          All placements are conditional. An interview with the director and /
          or coordinators may be arranged prior to acceptance as part of the
          enrolment process. Admissions are conditional on a student&apos;s
          ability to benefit from the tuition offered.
        </p>
        <p className="mb-2">
          Applicants who meet all admissions criteria are admitted for the
          appropriate year group based on age and current performance level,
          class size permitting. However, factors such as previous records,
          measured aptitude and achievement, physical and emotional development
          and other relevant details are also considered. The final decision
          rest with the director. A six week trial period in the class to which
          the student is assigned, is mandatory.
        </p>
        <p className="mb-2">
          AMIS also reserves the right to postpone admission if a class is full.
          In this case, the applicant is placed on a waiting list. The qualified
          applicants are then accepted in order of date of application.
        </p>
        <p className="mb-2"></p>
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">Finance</h2>
        <h3 className="text-xl font-bold mb-2">Tuition fees</h3>
        <p className="mb-2">
          Tuition fees for the following school year are set by the AMIS board
          of Trustees in conjunction with the School Director. The fees are
          divided into two terms and are payable upon receipt of an invoice. In
          all cases, the tuition fees for a term which has started are payable
          in full. Unless the deadlines for notification of drawl are adhered
          to, the cancellation of a confirmed enrolment or re-enrolment entails
          the obligation to pay the fees for the current and following term. The
          same payment obligations apply in the event that it is necessary for
          the school to terminate the student&apos;s enrolment at any stage
          during the school Year.
        </p>
        <p className="mb-2">
          The academic year is divided into two or three terms:
        </p>
        <h3 className="text-xl font-bold mb-2">
          (2023-2024) Academic Year Discounts
        </h3>
        <table className="border border-gray-400 w-full text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">DEAPRTMENT</th>
              <th className="border border-gray-400 px-4 py-2">
                1ST CHILD DISCOUNT
              </th>
              <th className="border border-gray-400 px-4 py-2">
                2ND CHILD DISCOUNT
              </th>
              <th className="border border-gray-400 px-4 py-2">
                3RD CHILD DISCOUNT
              </th>
              <th className="border border-gray-400 px-4 py-2">
                FULL PAYMENT DISCOUNT
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-4 py-2">KG</td>
              <td className="border border-gray-400 px-4 py-2">25%</td>
              <td className="border border-gray-400 px-4 py-2">25%</td>
              <td className="border border-gray-400 px-4 py-2">25%</td>
              <td className="border border-gray-400 px-4 py-2">30%</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">GRADE 1-3</td>
              <td className="border border-gray-400 px-4 py-2">10%</td>
              <td className="border border-gray-400 px-4 py-2">15%</td>
              <td className="border border-gray-400 px-4 py-2">20%</td>
              <td className="border border-gray-400 px-4 py-2">20%</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">GRADE 4-6</td>
              <td className="border border-gray-400 px-4 py-2">5%</td>
              <td className="border border-gray-400 px-4 py-2">10%</td>
              <td className="border border-gray-400 px-4 py-2">15%</td>
              <td className="border border-gray-400 px-4 py-2">15%</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">GRADE 7-9</td>
              <td className="border border-gray-400 px-4 py-2">5%</td>
              <td className="border border-gray-400 px-4 py-2">10%</td>
              <td className="border border-gray-400 px-4 py-2">15%</td>
              <td className="border border-gray-400 px-4 py-2">15%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="text-xl font-bold mb-2">
        (2023-2024) Academic Year Discounts
      </h3>
      <table className="border border-gray-400 w-full text-center">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">DEAPRTMENT</th>
            <th className="border border-gray-400 px-4 py-2">1ST CHILD Fee</th>
            <th className="border border-gray-400 px-4 py-2">2ND CHILD Fee</th>
            <th className="border border-gray-400 px-4 py-2">3RD CHILD Fee</th>
            <th className="border border-gray-400 px-4 py-2">
              FULL PAYMENT Fee
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-2">KG</td>
            <td className="border border-gray-400 px-4 py-2">9375</td>
            <td className="border border-gray-400 px-4 py-2">9375</td>
            <td className="border border-gray-400 px-4 py-2">9375</td>
            <td className="border border-gray-400 px-4 py-2">8750</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">GRADE 1-3</td>
            <td className="border border-gray-400 px-4 py-2">11700</td>
            <td className="border border-gray-400 px-4 py-2">11050</td>
            <td className="border border-gray-400 px-4 py-2">10400</td>
            <td className="border border-gray-400 px-4 py-2">10400</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">GRADE 4-6</td>
            <td className="border border-gray-400 px-4 py-2">13300</td>
            <td className="border border-gray-400 px-4 py-2">12600</td>
            <td className="border border-gray-400 px-4 py-2">11900</td>
            <td className="border border-gray-400 px-4 py-2">11900</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">GRADE 7-9</td>
            <td className="border border-gray-400 px-4 py-2">14250</td>
            <td className="border border-gray-400 px-4 py-2">13500</td>
            <td className="border border-gray-400 px-4 py-2">12750</td>
            <td className="border border-gray-400 px-4 py-2">12750</td>
          </tr>
        </tbody>
      </table>
      <div className="p-4">
        <p className="mb-2">
          Please note that the following items are included in the fees:
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>Tuition</li>
          <li>
            Provision of all necessary transcripts relating to attendance and
            academic performance.
          </li>
        </ul>
        <p className="mb-2">
          Please note that the following items are not included in the basic
          fees, as these costs will vary per year group and per year.
        </p>
        <h3 className="text-lg font-bold mb-2">Obligatory</h3>
        <ul className="list-disc list-inside mb-2">
          <li>Excursions & fieldtrips.</li>
          <li>Uniform requirements.</li>
        </ul>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">Late payment of school fees</h3>
        <p className="mb-2">
          In the event a student&apos;s tuition is overdue for payment (7 days
          from the date mentioned before), parents will be notified through a
          form of communication e.g. Letters, mail, or phone call requesting the
          guardian / parents to clear the outstanding balance.
        </p>
        <p className="mb-2">
          Non-clearance of the balance within a week&apos;s time after
          notification, would lead to{" "}
          <span className="underline">
            cancellation of any discount if given
          </span>
          . In event if the outstanding balance is not cleared thereafter than
          the school director will be involved by having a direct meeting with
          those parents /guardians for making them fully aware regarding the
          management decisions pertaining to fees structure set.
        </p>
        <h3 className="text-lg font-bold mb-2">
          Registration of new students:
        </h3>
        <p className="mb-2">
          For new students in all classes, parents will have to pay 30% of the
          school fees in advance. This deposit will be credited against the term
          1 fees for the new academic year.
        </p>
        <h3 className="text-lg font-bold mb-2">Re-Registration:</h3>
        <p className="mb-2">
          {" "}
          In May of each year, parents will be asked to complete and return a
          re-registration form, indicating whether their child will be returning
          to AMIS the following school year. Places cannot be reserved unless
          there is a definite indication that a student intends to return and a
          deposit of SR 2500 paid for each student. As far for KG students ,
          parents will have to pay 30% of school fees in advance . This deposit
          will be credited against the term 1 fees for the new academic year.
        </p>
        <h3 className="text-lg font-bold mb-2">Transportation :</h3>
        <p className="mb-2">
          Buses are available form and to school according to an arrangement
          between parents and the school regarding the location and the student
          behavior in the bus.
        </p>
        <h3 className="text-lg font-bold mb-2">Bus fees</h3>
        <p className="mb-2">Bus fees are as follows:</p>
        <ul className="list-disc list-inside mb-2">
          <li>ONE WAY: 2,300S.R.</li>
          <li>TWO WAY: 3,500S.R.</li>
        </ul>
        <p className="mb-2">
          50% of the bus fees are to be paid upon registration. The other 50% is
          paid at the beginning of the second half of the school year.
        </p>
      </div>
    </Layout>
  );
}
