import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { useModel } from 'umi';
import ProductList from '@/components/UserList';

const UserIndex = () => {
	const { dataSource, reload} = useModel('useUserList');


	return (
		<div>
			<a onClick="reload">reload</a>
		</div>
	);
};

export default UserIndex;
