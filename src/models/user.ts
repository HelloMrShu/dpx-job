import { message } from 'antd';
import { useRequest } from 'umi';
import { queryUserList } from '@/services/user';

export default function useUserList(params: { pageSize: number; current: number }) {
  const res = useRequest(() => queryUserList(params));

  return {
    dataSource: res.data,
    reload: res.run,
    loading: res.loading,
  };
}
