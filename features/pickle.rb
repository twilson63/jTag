require 'rubygems'
require 'sinatra'
require 'haml'

get '/' do
  @scripts = []
  Dir.glob('./public/lib/*.js').each do |js|
    @scripts << <<-HTML
<script src='/lib/#{js.split('/').pop}' type='text/javascript'></script>    
    HTML
    puts js
  end  

  Dir.glob('./public/*.js').each do |js|
    @scripts << <<-HTML
<script src='#{js.split('/').pop}' type='text/javascript'></script>    
    HTML
    puts js
  end  
  
  haml :index
  
end

template :layout do
<<-HTML
!!! Strict
%html{html_attrs('en-US')}
  %head
    %title Pickle Features
    - @scripts.each do |s|
      = s
  %body
    = yield
HTML
  
end


template :index do
<<-HTML
Pickle Features
HTML

end