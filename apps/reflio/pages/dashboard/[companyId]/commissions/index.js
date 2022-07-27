import { SEOMeta } from '@/templates/SEOMeta'; 
import { CommissionsTemplate } from '@/components/CommissionsTemplate'; 

export default function CommissionsPage() {
  return (
    <>
      <SEOMeta title="Sales"/>
      <CommissionsTemplate page="index"/>
    </>
  );
}