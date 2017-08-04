# sanfranciscoarchitects

## CSS Architecture: Scalable and Modular Architecture of CSS (SMACSS) and <br> Blocks, Elements, Modules (BEM)

### File Structurure used: SMACSS
  
### Class name styles: BEM 
  
  ## San Francisco Architects File Structure
  
    - SCSS
      - Modules
        - all components / modules
      - _base.scss (contains normalize and general semantics styles)
      - _layout.scss
      - _global.scss
      - _modules.scss (imports all components found in Modules folder)
      - _utils.scss (imports all third party i.e. bootstrap)
      - _variables.scss
      - style.scss
 
   ## Prefix meaning
   
   In San Francisco architect html files, I've used prefixes which will direct developers to specific scss files. Below are as follows:
   
   **L** - all class names with prefix "L" (i.e l-overview, l-categories) can be found under _layout.scss
   
   **G** - all class names with prefix "G" which represents modules/components (i.e. g-section__title) can be found under _global.scss
      
   
   
   
