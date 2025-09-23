import React from "react";
import { Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import "../../components/table.css";

// interface DataType {
//   key: string;
//   name: string;
//   age: number;
//   address: string;
//   tags: string[];
// }
// const columns: TableProps<DataType>["columns"] = [
//   {
//     title: "Name",
//     dataIndex: "name",
//     key: "name",
//     render: (text) => <a>{text}</a>,
//   },
//   {
//     title: "Age",
//     dataIndex: "age",
//     key: "age",
//   },
//   {
//     title: "Address",
//     dataIndex: "address",
//     key: "address",
//   },
//   {
//     title: "Tags",
//     key: "tags",
//     dataIndex: "tags",
//     render: (_, { tags }) => (
//       <>
//         {tags.map((tag) => {
//           let color = tag.length > 5 ? "geekblue" : "green";
//           if (tag === "loser") {
//             color = "volcano";
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </>
//     ),
//   },
//   {
//     title: "Action",
//     key: "action",
//     render: (_, record) => (
//       <Space size="middle">
//         <a>Invite {record.name}</a>
//         <a>Delete</a>
//       </Space>
//     ),
//   },
// ];

// const data: DataType[] = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park",
//     tags: ["nice", "developer"],
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     age: 42,
//     address: "London No. 1 Lake Park",
//     tags: ["loser"],
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//     tags: ["cool", "teacher"],
//   },
// ];

const AboutUs: React.FC = () => {
  return (
    <section className="dark:bg-neutral-800 dark:text-white">
      <table className="border-collapse border border-gray-400 ...">
        <thead>
          <tr>
            <th className="border border-gray-300 ...">State</th>
            <th className="border border-gray-300 ...">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 ...">Indiana</td>
            <td className="border border-gray-300 ...">Indianapolis</td>
          </tr>
          <tr>
            <td className="border border-gray-300 ...">Ohio</td>
            <td className="border border-gray-300 ...">Columbus</td>
          </tr>
          <tr>
            <td className="border border-gray-300 ...">Michigan</td>
            <td className="border border-gray-300 ...">Detroit</td>
          </tr>
        </tbody>
      </table>
      {/* <Table<DataType>
        columns={columns}
        dataSource={data}
        style={{ padding: "10px" }}
        pagination={false}
      /> */}
    </section>
  );
};

export default AboutUs;
