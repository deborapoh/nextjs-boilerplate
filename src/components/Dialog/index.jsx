import CompanyDialog from "./CompanyDialog"
import CompanyEditDialog from "./CompanyEditDialog"
import ConfigurationDialog from "./ConfigurationDialog"
import ExpenseCategoryDialog from "./ExpenseCategoryDialog"
import ExpenseCategoryEditDialog from "./ExpenseCategoryEditDialog"
import PreferencesDialog from "./PreferencesDialog"

const Dialog = () => {
  return (
    <>
      <CompanyDialog />
      <CompanyEditDialog />
      <ConfigurationDialog />
      <ExpenseCategoryDialog />
      <ExpenseCategoryEditDialog />
      <PreferencesDialog />
    </>
  )
}

export default Dialog
