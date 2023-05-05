import { AllocationManager } from "@/Manager/AllocationManager";



const handleClick= (event: React.ChangeEvent<HTMLSelectElement>) => {
    AllocationManager.selectBillableStatus(Number(event.target.value));
}

export const BillableStatus = () => {
    return (
      <select
      style={{width: "240px", marginInlineStart: "26px", cursor: "pointer"}}
      className="form-select mt-3"
      aria-label="Default select example"
      // value={selectedDataStore.selectedDepartment ? selectedDataStore.selectedDepartment : ''}
      onChange={handleClick}
    >
      <option value={''}>Bill Status</option>
        <option key={100} value={100}>Billed</option>
        <option key={0} value={0}>Not-Billed</option>
        <option key={1000} value={1000}>Partial-Billed</option>
    </select>
    );
}

/*
<FormControl sx={{ m: 1, minWidth: 250 }}>
          <InputLabel htmlFor="grouped-select">Bill Status</InputLabel>
          <Select defaultValue={selectedDataStore.selectedBillableStatus || selectedDataStore.selectedBillableStatus==0 ? selectedDataStore.selectedBillableStatus : null} id="grouped-select" label="Grouping" >
          <MenuItem value="" onClick={()=> handleClick(null)} >
              <em>None</em>
          </MenuItem>
            <MenuItem value={100}  onClick={()=> handleClick(100)} >Billed</MenuItem> 
            <MenuItem value={0}  onClick={()=> handleClick(0)}  >Not-Billed</MenuItem> 
            <MenuItem value={1000} onClick={()=> handleClick(1000)} >Partial-Billed</MenuItem>
          </Select>
</FormControl>
*/