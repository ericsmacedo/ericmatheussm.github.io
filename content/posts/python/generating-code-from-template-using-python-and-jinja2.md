Title: Generating code from templates
Date: 2022-03-07 21:47
Modified: 2022-03-07 21:47
Category: python
Tags: python, jinja2
Slug: generating-code-from-templates-using-python-and-jinja2
Authors: Eric Macedo

Templates are very useful and can save us a lot of time. If you work writing contracts in an energy company, for example, instead of re-writing the same contract from scratch for every new costumer, you can reuse the same contract as a template, replacing only the name and address field with the new costumer’s name and address and, like MAGIC, you will have the new contract ready in minutes. 

The same way, you can use Python and Jinja2 to auto generate files from templates. I usually use it to generate testbenches or SystemVerilog files.
As an example, lets auto generate a simple testbench file to test a system verilog module. Note that this example shows something I usually generate. You can adapt the template file to generate what you want/need.

The testbench file we want to generate, should have a module name equal to tb_*module_name*  and it must instantiate the module that will be tested and connect its ports to a interface _if. The information that we have available:

- The name of a module and a list of ports  —> Imagine this as being the name and address of the new costumer, like in the Energy contract example.
- A template file

Available info (The info was taken from [this example](https://www.asic-world.com/examples/systemverilog/ram_dp_sr_sw.html#Dual_Port_RAM_Synchronous_Read/Write)):

```python
import pathlib
from jinja2 import Template
# Module name and list of ports name. We will use this info to generate our
# template
mod_name = "ram_dp_sr_sw"
port_lst = [ "clk", "address_0", "data_0", "cs_0", "we_0", "oe_0", "address_1",
              "data_1", "cs_1", "we_1", "oe_1"]      
```



Template file:

```verilog
// The module name should be replace by the module being instantiated
module tb_{{module_name}}

// Module instance will be added here
{{module_name}} dut ( 
{%- for port in port_lst[:-1] %}
    .{{port}}(_if.{{port}}),
{%- endfor %}
    .{{port_lst[-1]}}(_if.{{port_lst[-1]}})
);

initial begin
// ...
end

endmodule
```

All we need to do is to render the template passing the module name and list of ports as arguments.

```python
# Load template content using jinja2's Template function
mod_template = Template(pathlib.Path("./template.sv").read_text())

# render template. Note that we are passing the module name and the list of
# ports as arguments to render the template
mod_text = mod_template.render(module_name=mod_name,
                               port_lst=port_lst)

# save result to a file
with open(f'{mod_name}.sv', 'w') as fid:
    fid.write(mod_text)
```

This is the final result:

```verilog
module tb_ram_dp_sr_sw

ram_dp_sr_sw dut (
    .clk(_if.clk),
    .address_0(_if.address_0),
    .data_0(_if.data_0),
    .cs_0(_if.cs_0),
    .we_0(_if.we_0),
    .oe_0(_if.oe_0),
    .address_1(_if.address_1),
    .data_1(_if.data_1),
    .cs_1(_if.cs_1),
    .we_1(_if.we_1),
    .oe_1(_if.oe_1)
);

initial begin
// add code here
end

endmodule
```

Jinja2 can do a lot more than what I am showing at this simple example. If you are interested in using Jinja2, check the references below:

- [Jinja2 documentation](https://jinja.palletsprojects.com/en/3.0.x/)
- [Real Python: Primer on Jinja Templating](https://realpython.com/primer-on-jinja-templating/):  Very good tutorial. Contain several examples using Jinja2 to generate HTML from templates.
