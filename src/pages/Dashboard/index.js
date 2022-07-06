import React from 'react';
import DataTable from '../../components/DataTable';
import RecentlyViewed from '../../components/RecentlyViewed';

const Dashboard = () => {

  return (
    <div className="dashboard flex flex-col">
      <RecentlyViewed />
      <h1 className='mx-auto text-center text-3xl font-teko py-5'>DASHBOARD</h1>
      <DataTable />
    </div>
  )
}

export default Dashboard;